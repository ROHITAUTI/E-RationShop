package com.app.controller;

import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ImageDTO;
import com.app.dto.RespDTO;
import com.app.pojos.ProductImage;
import com.app.service.ProductImageServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("/customers/image")
public class ImageController {
	@Value("${file.upload.location}")
	private String location;
	@Autowired
	private ProductImageServiceImpl imgService;

	// add a method to upload User details in JSON format n multipart image file ,
	// to save in DB
	// Tested with angular front end n postman
	@PostMapping("/upload")
	public RespDTO fileUploadWithParams(@RequestParam String productName, @RequestParam MultipartFile imageFile) {
		System.out.println("data " + productName + " " + imageFile.getOriginalFilename());
		try {
			// un marshalling json--> java
			imgService.findByProductName(productName, imageFile);
			// imageFile.transferTo(new File(location, imageFile.getOriginalFilename()));
			// System.out.println("user dtls " + u);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return new RespDTO("File uploaded :" + imageFile.getOriginalFilename() + " @ ", LocalDateTime.now());
	}

	@GetMapping("/download1/{productName}")
	public ResponseEntity<?> downloadImage(@PathVariable String productName) throws IOException {
		System.out.println("in img download " + productName);
		ProductImage p = imgService.getImageByName(productName);
//		Path path = Paths.get(location, imgName);
		ImageDTO img = new ImageDTO();
		img.setName(productName);
		img.setData(p.getImage());
		img.setType(p.getImageContentType());
//		System.out.println(img.getType());
		return new ResponseEntity<>(img, HttpStatus.OK);

	}
	
	@GetMapping("/download/{imgName}")
	//Sample URL : http://localhost:8080/image/download2/plums.jfif
	public ResponseEntity<InputStreamResource> getImage(@PathVariable String imgName) throws IOException {

		System.out.println("in img download 2 " + (location + imgName));
		Path path = Paths.get(location, imgName);
		InputStreamResource inputStreamResource = new InputStreamResource(new FileInputStream(path.toFile()));

		HttpHeaders headers = new HttpHeaders();
		headers.add("content-type", Files.probeContentType(path));
		return ResponseEntity.ok().headers(headers).body(inputStreamResource);
	}

}

package com.jobportal.controller;

import com.jobportal.entity.Admin;
import com.jobportal.repository.AdminRepository;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    private final AdminRepository adminRepository;

    public AdminController(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @PostMapping("/login")
    public String login(@RequestBody Admin admin) {

        return adminRepository
                .findByAdminIdAndEmailAndPassword(
                        admin.getAdminId(),
                        admin.getEmail(),
                        admin.getPassword()
                )
                .map(a -> "Login successful")
                .orElse("Invalid Admin ID, Email or Password");
    }
}
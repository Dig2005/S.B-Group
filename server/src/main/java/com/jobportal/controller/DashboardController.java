package com.jobportal.controller;
import com.jobportal.service.DashboardService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(
            DashboardService dashboardService
    ) {
        this.dashboardService = dashboardService;
    }

    @GetMapping
    public Map<String, Object> getDashboard() {

        return dashboardService.getDashboardData();
    }
}
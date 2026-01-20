package com.example.jobapplicationtracker.service;

import com.example.jobapplicationtracker.model.Application;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.util.List;

@Service
public class ExcelExportService {

    public byte[] exportApplications(List<Application> applications) throws Exception {
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Applications");

        // Header row
        Row header = sheet.createRow(0);
        String[] columns = {"ID", "Candidate", "Company", "Role", "Description", "Status"};

        for (int i = 0; i < columns.length; i++) {
            header.createCell(i).setCellValue(columns[i]);
        }

        // Data rows
        int rowNum = 1;
        for (Application app : applications) {
            Row row = sheet.createRow(rowNum++);
            row.createCell(0).setCellValue(app.getId());
            row.createCell(1).setCellValue(app.getCandidateName());
            row.createCell(2).setCellValue(app.getCompany());
            row.createCell(3).setCellValue(app.getRole());
            row.createCell(4).setCellValue(app.getDescription());
            row.createCell(5).setCellValue(app.getStatus());
        }

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        workbook.write(out);
        workbook.close();

        return out.toByteArray();
    }
}

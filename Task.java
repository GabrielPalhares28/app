/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package com.mycompany.task;

/**
 *
 * @author 55649
 */import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

    public class Task {
    private String description;
    private LocalTime time;

    public Task(String description, LocalTime time) {
        this.description = description;
        this.time = time;
    }

    public String getDescription() {
        return description;
    }

    public LocalTime getTime() {
        return time;
    }

    @Override
    public String toString() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");
        return time.format(formatter) + " - " + description;
    }
}
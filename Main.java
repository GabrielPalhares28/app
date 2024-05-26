/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.task;

/**
 *
 * @author 55649
 */import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        TaskManager taskManager = new TaskManager();
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm");

        while (true) {
            System.out.println("1. Add Task");
            System.out.println("2. Remove Task");
            System.out.println("3. List Tasks");
            System.out.println("4. Exit");
            System.out.print("Choose an option: ");
            int choice = scanner.nextInt();
            scanner.nextLine();  // Consume newline

            switch (choice) {
                case 1:
                    System.out.print("Enter task description: ");
                    String description = scanner.nextLine();
                    System.out.print("Enter task time (HH:mm): ");
                    String timeString = scanner.nextLine();
                    LocalTime time = LocalTime.parse(timeString, timeFormatter);
                    taskManager.addTask(new Task(description, time));
                    break;

                case 2:
                    System.out.print("Enter task description to remove: ");
                    String removeDescription = scanner.nextLine();
                    taskManager.removeTask(removeDescription);
                    break;

                case 3:
                    taskManager.listTasks();
                    break;

                case 4:
                    System.out.println("Exiting...");
                    scanner.close();
                    return;

                default:
                    System.out.println("Invalid option. Please try again.");
            }
        }
    }
    
}

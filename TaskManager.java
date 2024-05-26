/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.task;

/**
 *
 * @author 55649
 */import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
        
    public class TaskManager {
        private List<Task> tasks;

    public TaskManager() {
        this.tasks = new ArrayList<>();
    }

    public void addTask(Task task) {
        tasks.add(task);
    }

    public void removeTask(String description) {
        Iterator<Task> iterator = tasks.iterator();
        while (iterator.hasNext()) {
            Task task = iterator.next();
            if (task.getDescription().equalsIgnoreCase(description)) {
                iterator.remove();
                return;
            }
        }
        System.out.println("Task not found: " + description);
    }

    public void listTasks() {
        if (tasks.isEmpty()) {
            System.out.println("No tasks available.");
        } else {
            for (Task task : tasks) {
                System.out.println(task);
            }
        }
    }
    
}

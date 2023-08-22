package com.example.demo.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Comment;
import com.example.demo.repo.CommentRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CommentService {
    
    @Autowired
    private CommentRepo commentRepo;

    public Comment saveComment(Comment comment){
        return commentRepo.save(comment);
    }

    public List<Comment> getComments(){
        return commentRepo.findAll();
    }
}

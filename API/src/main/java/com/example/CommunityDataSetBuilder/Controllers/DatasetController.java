package com.example.CommunityDataSetBuilder.Controllers;

import com.example.CommunityDataSetBuilder.DAO.DatasetsRepository;
import com.example.CommunityDataSetBuilder.Models.Dataset;
import com.example.CommunityDataSetBuilder.Models.Label;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller // This means that this class is a Controller
@RequestMapping(path="/dataset") // This means URL's start with /dataset (after Application path)
public class DatasetController {

    @Autowired
    private DatasetsRepository datasetsRepository;

    @PostMapping(path="/create") // Map ONLY POST Requests
    public @ResponseBody
    String addDataset (@RequestParam String name) {

        Dataset dataset = new Dataset();
        dataset.datasetName = name;
        datasetsRepository.save(dataset);
        return "Created";
    }

    @GetMapping(path="/{id}")
    public @ResponseBody
    Optional<Dataset> GetById (@RequestParam String id) {
        return datasetsRepository.findById(id);
    }

    @PostMapping(path="/update") // Map ONLY POST Requests
    public @ResponseBody String UpdateDataset (@RequestParam String id, @RequestParam String name) {

        Optional<Dataset> dataset = datasetsRepository.findById(id);
        if (dataset.isPresent()) {
            Dataset s = dataset.get();
            s.datasetName = name;
            datasetsRepository.save(s);
            return "Updated";
        }
        return "Not found";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Dataset> getAllUsers() {
        // This returns a JSON or XML with the users
        return datasetsRepository.findAll();
    }

    @DeleteMapping(path="/delete/{id}")
    public @ResponseBody String DeleteById(@RequestParam String id) {
        datasetsRepository.deleteById(id);
        return "Deleted";
    }

    @GetMapping(path = "/test")
    public @ResponseBody String Test() {
        return "This is working";
    }
}


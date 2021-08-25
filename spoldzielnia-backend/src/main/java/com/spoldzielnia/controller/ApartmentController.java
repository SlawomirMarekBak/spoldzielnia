package com.spoldzielnia.controller;

import com.spoldzielnia.model.Apartment;
import com.spoldzielnia.service.ApartmentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
// http://localhost:8080/api/apartment/list
@RestController
@RequestMapping("/api/apartment")
public class ApartmentController {

  @Autowired
  private ApartmentServiceImpl apartmentService;

  @RequestMapping(value = "/list", method = RequestMethod.GET)
  public Iterable<Apartment> getAllApartments() {
    return apartmentService.getAll();
  }

  @RequestMapping(value = "/add", method = RequestMethod.POST)
  public void addApartment(@RequestBody Apartment apartment) {
    apartmentService.addApartment(apartment);
  }
}

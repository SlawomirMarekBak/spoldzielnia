package com.spoldzielnia.service;

import com.spoldzielnia.model.Apartment;
import com.spoldzielnia.repo.ApartmentRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApartmentServiceImpl {

  @Autowired
  private ApartmentRepository apartmentRepository;

  public ApartmentServiceImpl(ApartmentRepository apartmentRepository) {
    this.apartmentRepository = apartmentRepository;
  }

  public Optional<Apartment> findId(Long id) {
    return apartmentRepository.findById(id);
  }

  public Iterable<Apartment> getAll() {
    return apartmentRepository.findAll();
  }

  public void addApartment(Apartment apartment) {
    apartmentRepository.save(apartment);
  }
}

package com.spoldzielnia.repo;

import com.spoldzielnia.model.Apartment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApartmentRepository extends JpaRepository<Apartment, Long> {

  Apartment findById(String id);
  
}

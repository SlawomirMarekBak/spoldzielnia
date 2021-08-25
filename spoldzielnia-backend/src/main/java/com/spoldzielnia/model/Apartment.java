package com.spoldzielnia.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Apartment implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "USER_ID")
  private Long id;

  @Column(name = "CITY")
  private String city;

  @Column(name = "ZIP_CODE")
  private String zipCode;

  @Column(name = "STREET_NAME")
  private String streetName;

  @Column(name = "STREET_NUMBER")
  private String streetNumber;

  public Long getId() {
    return id;
  }

  public String getCity() {
    return city;
  }

  public String getZipCode() {
    return zipCode;
  }

  public String getStreetName() {
    return streetName;
  }

  public String getStreetNumber() {
    return streetNumber;
  }
}

  ## Difference between JPA, Hibernate and Spring Data JPA

---

## 🔹 1. JPA (Java Persistence API)

JPA is a **Java specification** used for managing relational data in Java applications.

### Key Points:
- It is **NOT a framework**
- Contains only **interfaces and annotations**
- Defines **standards for ORM (Object Relational Mapping)**
- Requires an implementation like Hibernate

### Common Annotations:
- @Entity
- @Id
- @Table

👉 JPA is a **blueprint or set of rules**

---

## 🔹 2. Hibernate

Hibernate is a **framework** that provides the **implementation of JPA**.

### Key Points:
- Implements JPA specifications
- Provides **actual database operations**
- Supports:
  - CRUD operations
  - Query execution
  - Caching
- Can work independently (without Spring)

👉 Hibernate is the **engine that follows JPA rules**

---

## 🔹 3. Spring Data JPA

Spring Data JPA is a **Spring module** that simplifies working with JPA.

### Key Points:
- Built on top of JPA (uses Hibernate internally)
- Reduces **boilerplate code**
- No need to write DAO implementations
- Provides **JpaRepository**

### Example:
```java
public interface CountryRepository extends JpaRepository<Country, String> {
}
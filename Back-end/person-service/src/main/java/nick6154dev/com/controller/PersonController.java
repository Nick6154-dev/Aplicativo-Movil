package nick6154dev.com.controller;

import nick6154dev.com.entity.Person;
import nick6154dev.com.repository.IPersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/personService")
public class PersonController {

    @Autowired
    private IPersonRepository repository;

    @GetMapping("/findAll")
    public List<Person> findAll() {
        return (List<Person>) repository.findAll();
    }

    @GetMapping("/findById/{id}")
    public Person findById(@PathVariable Long id) {
        return repository.findById(id).get();
    }

    @PostMapping("/save")
    public Person save(@RequestBody Person person) {
        return repository.save(person);
    }

    @DeleteMapping("/delete")
    public void delete(@RequestBody Person person) {
        repository.delete(person);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @PostMapping("/update/{id}")
    public Person update(@PathVariable Long id, @RequestBody Person person) {
        Optional<Person> optionalPerson = repository.findById(id);
        return optionalPerson.map(foundedPerson -> {
            person.setId(foundedPerson.getId());
            return repository.save(person);
        }).get();
    }

}

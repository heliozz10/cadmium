package com.heliozz10.cadmium;

import com.heliozz10.cadmium.entity.Appeal;
import com.heliozz10.cadmium.entity.Violation;
import com.heliozz10.cadmium.repository.AppealRepository;
import com.heliozz10.cadmium.repository.ViolationRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;

@SpringBootApplication
public class CadmiumApplication {

	public static void main(String[] args) {
		SpringApplication.run(CadmiumApplication.class, args);
	}

	@Bean
	public CommandLineRunner setup(ViolationRepository violationRepo, AppealRepository appealRepo) {
		return args -> {
			violationRepo.save(new Violation("ABC123", new Date(), "test location"));
			appealRepo.save(new Appeal("test appeal", violationRepo.findById(1L).orElse(null)));
		};
	}
}

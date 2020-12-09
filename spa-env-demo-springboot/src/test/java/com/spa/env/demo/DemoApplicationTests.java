package com.spa.env.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.TestPropertySources;

@SpringBootTest
@TestPropertySource(properties = "react.app.user=TestUser")
class DemoApplicationTests {

	@Test
	void contextLoads() {
	}

}

package com.beinglocal.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Slf4j
public class IndexController {

    @GetMapping("/")
    public String index(){
        log.info("info");
        log.error("error");
        log.warn("warn");
        log.debug("debug");
        log.trace("trace");
        return "redirect:actuator/health";
    }


}

package com.example.backend.service.primary;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional("primaryTransactionManager")
@Service
public class ProcessInstanceService {

}

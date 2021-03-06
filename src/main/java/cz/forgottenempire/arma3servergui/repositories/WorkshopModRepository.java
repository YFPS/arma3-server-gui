package cz.forgottenempire.arma3servergui.repositories;

import cz.forgottenempire.arma3servergui.model.WorkshopMod;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkshopModRepository extends CrudRepository<WorkshopMod, Long> {
    List<WorkshopMod> findByActiveTrue();
}

package cz.forgottenempire.arma3servergui.services;

import cz.forgottenempire.arma3servergui.model.WorkshopMod;
import java.util.Collection;

public interface WorkshopModsService {

    Collection<WorkshopMod> getAllMods();

    WorkshopMod installOrUpdateMod(Long id);

    void uninstallMod(Long id);

    void activateMod(Long id, boolean active);

    void updateAllMods();

}

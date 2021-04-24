import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
/* import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/settingsRepository"; */

const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);


/* routes.post("/settings", async (req, res) => {
  const { chat, username } = req.body;

  const settingsRepository = getCustomRepository(SettingsRepository);

  const settings = settingsRepository.create({
    chat,
    username
  });

  await settingsRepository.save(settings);

  return res.json(settings);

}) */

export { routes };

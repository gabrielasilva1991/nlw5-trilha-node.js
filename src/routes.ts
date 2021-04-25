import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { MessagesController } from "./controllers/MessagesController";
/* import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/settingsRepository"; */

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

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

import app from './app';

const APPLICATION_PORT = 4000;

app.listen(APPLICATION_PORT, () => {
  logger.info(`Server running at port ${APPLICATION_PORT}`);
});

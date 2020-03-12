export const clearDb = async models => {
  await Promise.all(models.map(m => m.deleteMany({})));
};

module.exports = {
  apps: [
    {
      name: "nuxt3-app",
      exec_mode: "cluster", // або 'fork' для однопотокового режиму
      instances: 2,
      script: "./.output/server/index.mjs", // шлях до зібраного файлу Nuxt 3
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};

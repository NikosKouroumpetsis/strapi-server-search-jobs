module.exports = ({ env }) => ({
  url: this.env("RENDER_EXTERNAL_URL"),
  dirs: {
    public: "data/public",
  },
});

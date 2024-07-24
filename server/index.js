import express from "express";

const app = express();

app.get("/home/data", (req, res) => {
  // 让响应返回的慢一点，方便测试取消重复请求等功能
  setTimeout(() => {
    res.json({
      code: 20000,
      success: true,
      message: "",
      data: [
        {
          id: 1,
          name: "jack",
        },
        {
          id: 2,
          name: "rose",
        },
      ],
    });
  }, 1000);
});

app.get("/about/data", (req, res) => {
  // 让响应返回的慢一点，方便测试取消重复请求等功能
  setTimeout(() => {
    res.json({
      code: 20000,
      success: true,
      message: "",
      data: [
        {
          id: 1,
          name: "jack",
        },
        {
          id: 2,
          name: "rose",
        },
      ],
    });
  }, 1000);
});

app.listen(3000, "localhost", (err) => {
  if (err) console.log("服务器启动失败了", err);
  else console.log("服务器启动成功了");
});

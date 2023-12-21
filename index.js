const express = require("express");
const axios = require("axios");

require("dotenv").config();
const app = express();
const PORT = 3001;

const TOKEN = process.env.LINE_ACCESS_TOKEN;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.post("/webhook", async (req, res) => {
  console.log("req.body =>", JSON.stringify(req.body, null, 2));
  if (req.body.events[0].type === "message") {
    const message = {
      type: "flex",
      altText: "This is a Flex Message",
      contents: {
        type: "bubble",
        header: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Order create by mint",
              offsetTop: "-10px",
              color: "#c2bac1",
              size: "xs",
            },
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
                    {
                      type: "image",
                      url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                      aspectMode: "cover",
                    },
                  ],
                  width: "50px",
                  height: "50px",
                  cornerRadius: "72px",
                },
                {
                  type: "text",
                  text: "Sally's birthday gift",
                  offsetStart: "20px",
                  size: "md",
                  weight: "bold",
                },
              ],
              position: "relative",
              alignItems: "center",
            },
          ],
        },
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
          size: "full",
          aspectRatio: "320:213",
          aspectMode: "cover",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Co bag",
              weight: "bold",
              size: "lg",
            },
            {
              type: "text",
              text: "$500",
            },
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
                    {
                      type: "image",
                      url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                      aspectMode: "cover",
                    },
                  ],
                  width: "50px",
                  height: "50px",
                  cornerRadius: "72px",
                },
                {
                  type: "text",
                  text: "MonA",
                  offsetStart: "20px",
                  size: "md",
                  weight: "bold",
                },
                {
                  type: "text",
                  text: "$ 300",
                  position: "relative",
                  align: "end",
                },
              ],
              position: "relative",
              alignItems: "center",
              offsetTop: "5px",
              margin: "10px",
            },
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
                    {
                      type: "image",
                      url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                      aspectMode: "cover",
                    },
                  ],
                  width: "50px",
                  height: "50px",
                  cornerRadius: "72px",
                },
                {
                  type: "text",
                  text: "MonA",
                  offsetStart: "20px",
                  size: "md",
                  weight: "bold",
                },
                {
                  type: "text",
                  text: "$ 300",
                  position: "relative",
                  align: "end",
                },
              ],
              position: "relative",
              alignItems: "center",
              margin: "10px",
            },
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
                    {
                      type: "image",
                      url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                      aspectMode: "cover",
                    },
                  ],
                  width: "50px",
                  height: "50px",
                  cornerRadius: "72px",
                },
                {
                  type: "text",
                  text: "MonA",
                  offsetStart: "20px",
                  size: "md",
                  weight: "bold",
                },
                {
                  type: "text",
                  text: "$ 300",
                  position: "relative",
                  align: "end",
                },
              ],
              position: "relative",
              alignItems: "center",
              offsetTop: "5px",
              margin: "10px",
            },
          ],
        },
        footer: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "button",
                  action: {
                    type: "uri",
                    label: "action",
                    uri: "http://linecorp.com/",
                  },
                  color: "#ffffff",
                },
              ],
              cornerRadius: "8px",
              backgroundColor: "#75d178",
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "button",
                  action: {
                    type: "uri",
                    label: "View more",
                    uri: "http://youtube.com/",
                  },
                  color: "#000000",
                },
              ],
              cornerRadius: "8px",
              backgroundColor: "#d4cfcf",
              margin: "lg",
            },
          ],
        },
      },
    };

    const data = {
      // Define reply token
      replyToken: req.body.events[0].replyToken,
      // Define reply messages
      messages: [message],
    };

    const response = await axios.post(
      "https://api.line.me/v2/bot/message/reply",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    console.log(response.data);
    res.sendStatus(200);
  }
});

app.listen(PORT, () => {
  console.log(`app listening to port${PORT}`);
});

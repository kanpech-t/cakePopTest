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
    // ============== parameter ===================
    const time = "7 day until...";
    const name = "Sally";
    const Birthday = "15 December 2023";
    const profileUrl =
      "https://render.fineartamerica.com/images/rendered/default/poster/7/8/break/images/artworkimages/medium/3/doremon-deepak-pengoria.jpg";
    const BirthdayCake =
      "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png";

    // example item list
    const arrayItem = [
      {
        img: "https://img.freepik.com/free-photo/white-tote-bag-with-bonjour-typography-accessory-studio-shoot_53876-102180.jpg?w=826&t=st=1703957053~exp=1703957653~hmac=ab779e368b674059300db73ab342780b1de3456e7188a48507d09d623692362e",
        name: "Bonjour Tote Bag",
        price: 1300,
      },
      {
        img: "https://img.freepik.com/free-photo/white-tote-bag-with-bonjour-typography-accessory-studio-shoot_53876-102180.jpg?w=826&t=st=1703957053~exp=1703957653~hmac=ab779e368b674059300db73ab342780b1de3456e7188a48507d09d623692362e",
        name: "Bonjour Tote Bag",
        price: 1300,
      },
      {
        img: "https://img.freepik.com/free-photo/white-tote-bag-with-bonjour-typography-accessory-studio-shoot_53876-102180.jpg?w=826&t=st=1703957053~exp=1703957653~hmac=ab779e368b674059300db73ab342780b1de3456e7188a48507d09d623692362e",
        name: "Bonjour Tote Bag",
        price: 1300,
      },
    ];

    // defined message
    const message = {
      type: "flex",
      altText: "This is a Flex Message",
      contents: {
        type: "carousel",
        contents: [
          {
            type: "bubble",
            // header
            header: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "horizontal",
                  contents: [
                    {
                      type: "text",
                      text: time,
                      align: "start",
                      size: "16px",
                      color: "#949494",
                      gravity: "center",
                    },
                    {
                      type: "box",
                      layout: "vertical",
                      contents: [
                        {
                          type: "image",
                          url: BirthdayCake,
                        },
                      ],
                      width: "32px",
                      height: "32px",
                    },
                  ],
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
                          url: profileUrl,
                        },
                      ],
                      width: "42px",
                      height: "42px",
                      cornerRadius: "xxl",
                    },
                    {
                      type: "box",
                      layout: "vertical",
                      contents: [
                        {
                          type: "box",
                          layout: "horizontal",
                          contents: [
                            {
                              type: "text",
                              text: name,
                              weight: "bold",
                              flex: 0,
                              size: "16px",
                            },
                            {
                              type: "text",
                              text: "'s Birthday",
                              size: "16px",
                            },
                          ],
                        },
                        {
                          type: "text",
                          text: Birthday,
                          size: "12px",
                          color: "#555555",
                        },
                      ],
                    },
                  ],
                  spacing: "10px",
                },
              ],
            },
            // body
            body: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
                    {
                      type: "text",
                      text: `${name}’s Wishlist`,
                      size: "16px",
                      weight: "bold",
                    },
                  ],
                },
              ],
            },
            footer: {
              type: "box",
              layout: "horizontal",
              contents: [
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
                          url: "https://lineshoppingseller.com/images/brand-asset/symbol-white-version.png",
                        },
                      ],
                      width: "20px",
                      height: "20px",
                      cornerRadius: "8px",
                    },
                    {
                      type: "text",
                      text: "LINE Shopping",
                      color: "#949494",
                      size: "14px",
                    },
                  ],
                  spacing: "8px",
                  alignItems: "center",
                  position: "relative",
                  offsetStart: "10px",
                },
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
                    {
                      type: "image",
                      url: "https://static-00.iconduck.com/assets.00/go-next-icon-293x512-li4ij2kh.png",
                    },
                  ],
                  width: "15px",
                  height: "15px",
                  position: "relative",
                  offsetEnd: "10px",
                },
              ],
              height: "52px",
              justifyContent: "space-between",
              alignItems: "center",
            },
            styles: {
              body: {
                separator: true,
              },
              footer: {
                separator: true,
              },
            },
          },

          {
            type: "bubble",
            header: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "horizontal",
                  contents: [
                    {
                      type: "text",
                      text: "7 day until...",
                      align: "start",
                      size: "16px",
                      color: "#949494",
                      gravity: "center",
                    },
                    {
                      type: "box",
                      layout: "vertical",
                      contents: [
                        {
                          type: "image",
                          url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                        },
                      ],
                      width: "32px",
                      height: "32px",
                    },
                  ],
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
                          url: "https://render.fineartamerica.com/images/rendered/default/poster/7/8/break/images/artworkimages/medium/3/doremon-deepak-pengoria.jpg",
                        },
                      ],
                      width: "42px",
                      height: "42px",
                      cornerRadius: "xxl",
                    },
                    {
                      type: "box",
                      layout: "vertical",
                      contents: [
                        {
                          type: "box",
                          layout: "horizontal",
                          contents: [
                            {
                              type: "text",
                              text: "Sally",
                              weight: "bold",
                              flex: 0,
                              size: "16px",
                            },
                            {
                              type: "text",
                              text: "'s Birthday",
                              size: "16px",
                            },
                          ],
                        },
                        {
                          type: "text",
                          text: "15 December 2023",
                          size: "12px",
                          color: "#555555",
                        },
                      ],
                    },
                  ],
                  spacing: "10px",
                },
              ],
            },
            body: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
                    {
                      type: "text",
                      text: "Sally’s Wishlist",
                      size: "16px",
                      weight: "bold",
                    },
                  ],
                },
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
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
                              url: "https://img.freepik.com/free-photo/white-tote-bag-with-bonjour-typography-accessory-studio-shoot_53876-102180.jpg?w=826&t=st=1703957053~exp=1703957653~hmac=ab779e368b674059300db73ab342780b1de3456e7188a48507d09d623692362e",
                              size: "106px",
                            },
                          ],
                          width: "106px",
                          height: "106px",
                        },
                        {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "text",
                              text: "Bonjour Tote Bag",
                              size: "12px",
                              weight: "bold",
                            },
                            {
                              type: "text",
                              text: "฿1,400",
                              size: "10px",
                              margin: "4px",
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
                                      url: "https://lineforbusiness.com/files/Screen%20Shot%202020-06-04%20at%2014.48.29.png",
                                      size: "28px",
                                    },
                                  ],
                                  width: "28px",
                                  height: "28px",
                                },
                                {
                                  type: "text",
                                  text: "10% (300P)",
                                  size: "10px",
                                  color: "#06C755",
                                },
                              ],
                              alignItems: "center",
                              position: "relative",
                              offsetStart: "-7px",
                              offsetTop: "-1px",
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
                                    },
                                  ],
                                  flex: 0,
                                  width: "24px",
                                  height: "24px",
                                },
                                {
                                  type: "text",
                                  text: "Send gift",
                                  flex: 0,
                                  size: "10px",
                                  weight: "bold",
                                },
                              ],
                              width: "100%",
                              height: "40px",
                              borderWidth: "1px",
                              cornerRadius: "4px",
                              borderColor: "#EFEFEF",
                              margin: "3px",
                              spacing: "4px",
                              justifyContent: "center",
                              alignItems: "center",
                            },
                          ],
                          height: "106px",
                        },
                      ],
                      spacing: "10px",
                      height: "106px",
                    },
                  ],
                  margin: "16px",
                  height: "106px",
                },
                {
                  type: "separator",
                  margin: "16px",
                },
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
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
                              url: "https://img.freepik.com/free-photo/white-tote-bag-with-bonjour-typography-accessory-studio-shoot_53876-102180.jpg?w=826&t=st=1703957053~exp=1703957653~hmac=ab779e368b674059300db73ab342780b1de3456e7188a48507d09d623692362e",
                              size: "106px",
                            },
                          ],
                          width: "106px",
                          height: "106px",
                        },
                        {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "text",
                              text: "Bonjour Tote Bag",
                              size: "12px",
                              weight: "bold",
                            },
                            {
                              type: "text",
                              text: "฿1,400",
                              size: "10px",
                              margin: "4px",
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
                                      url: "https://lineforbusiness.com/files/Screen%20Shot%202020-06-04%20at%2014.48.29.png",
                                      size: "28px",
                                    },
                                  ],
                                  width: "28px",
                                  height: "28px",
                                },
                                {
                                  type: "text",
                                  text: "10% (300P)",
                                  size: "10px",
                                  color: "#06C755",
                                },
                              ],
                              alignItems: "center",
                              position: "relative",
                              offsetStart: "-7px",
                              offsetTop: "-1px",
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
                                    },
                                  ],
                                  flex: 0,
                                  width: "24px",
                                  height: "24px",
                                },
                                {
                                  type: "text",
                                  text: "Send gift",
                                  flex: 0,
                                  size: "10px",
                                  weight: "bold",
                                },
                              ],
                              width: "100%",
                              height: "40px",
                              borderWidth: "1px",
                              cornerRadius: "4px",
                              borderColor: "#EFEFEF",
                              margin: "3px",
                              spacing: "4px",
                              justifyContent: "center",
                              alignItems: "center",
                            },
                          ],
                          height: "106px",
                        },
                      ],
                      spacing: "10px",
                      height: "106px",
                    },
                  ],
                  margin: "16px",
                  height: "106px",
                },
                {
                  type: "separator",
                  margin: "16px",
                },
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
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
                              url: "https://img.freepik.com/free-photo/white-tote-bag-with-bonjour-typography-accessory-studio-shoot_53876-102180.jpg?w=826&t=st=1703957053~exp=1703957653~hmac=ab779e368b674059300db73ab342780b1de3456e7188a48507d09d623692362e",
                              size: "106px",
                            },
                          ],
                          width: "106px",
                          height: "106px",
                        },
                        {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "text",
                              text: "Bonjour Tote Bag",
                              size: "12px",
                              weight: "bold",
                            },
                            {
                              type: "text",
                              text: "฿1,400",
                              size: "10px",
                              margin: "4px",
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
                                      url: "https://lineforbusiness.com/files/Screen%20Shot%202020-06-04%20at%2014.48.29.png",
                                      size: "28px",
                                    },
                                  ],
                                  width: "28px",
                                  height: "28px",
                                },
                                {
                                  type: "text",
                                  text: "10% (300P)",
                                  size: "10px",
                                  color: "#06C755",
                                },
                              ],
                              alignItems: "center",
                              position: "relative",
                              offsetStart: "-7px",
                              offsetTop: "-1px",
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
                                    },
                                  ],
                                  flex: 0,
                                  width: "24px",
                                  height: "24px",
                                },
                                {
                                  type: "text",
                                  text: "Send gift",
                                  flex: 0,
                                  size: "10px",
                                  weight: "bold",
                                },
                              ],
                              width: "100%",
                              height: "40px",
                              borderWidth: "1px",
                              cornerRadius: "4px",
                              borderColor: "#EFEFEF",
                              margin: "3px",
                              spacing: "4px",
                              justifyContent: "center",
                              alignItems: "center",
                            },
                          ],
                          height: "106px",
                        },
                      ],
                      spacing: "10px",
                      height: "106px",
                    },
                  ],
                  margin: "16px",
                  height: "106px",
                },
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
                    {
                      type: "text",
                      text: "View All Wishlist",
                      size: "12px",
                    },
                  ],
                  margin: "16px",
                  backgroundColor: "#EFEFEF",
                  width: "100%",
                  height: "44px",
                  cornerRadius: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                },
              ],
            },
            footer: {
              type: "box",
              layout: "horizontal",
              contents: [
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
                          url: "https://lineshoppingseller.com/images/brand-asset/symbol-white-version.png",
                        },
                      ],
                      width: "20px",
                      height: "20px",
                      cornerRadius: "8px",
                    },
                    {
                      type: "text",
                      text: "LINE Shopping",
                      color: "#949494",
                      size: "14px",
                    },
                  ],
                  spacing: "8px",
                  alignItems: "center",
                  position: "relative",
                  offsetStart: "10px",
                },
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
                    {
                      type: "image",
                      url: "https://static-00.iconduck.com/assets.00/go-next-icon-293x512-li4ij2kh.png",
                    },
                  ],
                  width: "15px",
                  height: "15px",
                  position: "relative",
                  offsetEnd: "10px",
                },
              ],
              height: "52px",
              justifyContent: "space-between",
              alignItems: "center",
            },
            styles: {
              body: {
                separator: true,
              },
              footer: {
                separator: true,
              },
            },
          },
        ],
      },
    };

    // add array Item to message
    arrayItem.forEach((item, index) => {
      const data = {
        type: "box",
        layout: "vertical",
        contents: [
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
                    url: item.img,
                    size: "106px",
                  },
                ],
                width: "106px",
                height: "106px",
              },
              {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "text",
                    text: item.name,
                    size: "12px",
                    weight: "bold",
                  },
                  {
                    type: "text",
                    text: `฿${item.price.toLocaleString("en-US")}`,
                    size: "10px",
                    margin: "4px",
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
                            url: "https://lineforbusiness.com/files/Screen%20Shot%202020-06-04%20at%2014.48.29.png",
                            size: "28px",
                          },
                        ],
                        width: "28px",
                        height: "28px",
                      },
                      {
                        type: "text",
                        text: "10% (300P)",
                        size: "10px",
                        color: "#06C755",
                      },
                    ],
                    alignItems: "center",
                    position: "relative",
                    offsetStart: "-7px",
                    offsetTop: "-1px",
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
                          },
                        ],
                        flex: 0,
                        width: "24px",
                        height: "24px",
                      },
                      {
                        type: "text",
                        text: "Send gift",
                        flex: 0,
                        size: "10px",
                        weight: "bold",
                      },
                    ],
                    width: "100%",
                    height: "40px",
                    borderWidth: "1px",
                    cornerRadius: "4px",
                    borderColor: "#EFEFEF",
                    margin: "3px",
                    spacing: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ],
                height: "106px",
              },
            ],
            spacing: "10px",
            height: "106px",
          },
        ],
        margin: "16px",
        height: "106px",
      };

      message.contents.contents[0].body.contents.push(data);
      if (index === arrayItem.length - 1) {
        message.contents.contents[0].body.contents.push({
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "View All Wishlist",
              size: "12px",
            },
          ],
          margin: "16px",
          backgroundColor: "#EFEFEF",
          width: "100%",
          height: "44px",
          cornerRadius: "5px",
          justifyContent: "center",
          alignItems: "center",
        });
      } else {
        message.contents.contents[0].body.contents.push({
          type: "separator",
          margin: "16px",
        });
      }
    });

    // set data
    const data = {
      // Define reply token
      replyToken: req.body.events[0].replyToken,
      // Define reply messages
      messages: [message],
    };

    // post to line
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

    res.sendStatus(200);
  }
});

app.listen(PORT, () => {
  console.log(`app listening to port${PORT}`);
});

import { rest } from "msw";
import emailProvider from "../providers/email/InMemoryProvider";
import { Contact } from "./types";

export const handlers = [
  rest.post<Contact>("/api/contact", (req, res, ctx) => {
    if (req.body.email.includes("error")) {
      return res(
        ctx.status(500),
        ctx.json({ error: "🔥 The server is on fire 😨" })
      );
    }
    if (req.body.message.length < 4) {
      return res(ctx.status(400), ctx.json({ error: "Too laconic buddy 🧐" }));
    }

    emailProvider.send(req.body);
    return res(ctx.status(200));
  }),
];

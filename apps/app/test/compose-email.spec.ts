import { describe, expect, it } from "bun:test";
import { gmailComposeUrl } from "../lib/compose-email";

describe("gmailComposeUrl", () => {
	it("opens a Gmail compose window addressed to the contact", () => {
		expect(gmailComposeUrl("ada@example.com")).toBe(
			"https://mail.google.com/mail/?view=cm&fs=1&to=ada%40example.com",
		);
	});

	it("trims surrounding whitespace", () => {
		expect(gmailComposeUrl("  ada@example.com  ")).toBe(
			"https://mail.google.com/mail/?view=cm&fs=1&to=ada%40example.com",
		);
	});

	it("encodes characters that would change the query", () => {
		expect(gmailComposeUrl("ada@example.com&bcc=hidden@example.com")).toBe(
			"https://mail.google.com/mail/?view=cm&fs=1&to=ada%40example.com%26bcc%3Dhidden%40example.com",
		);
	});
});

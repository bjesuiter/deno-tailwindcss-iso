import { assertEquals } from "jsr:@std/assert";
import { getTailwindClasses } from "../src/get-tailwind-classes.js";

Deno.test("getTailwindClasses", async () => {
  const content = '<div class="p-4 bg-blue-500 text-white">Hello</div>';
  const classes = await getTailwindClasses({ content });
  assertEquals(classes, ["p-4", "bg-blue-500", "text-white"]);
});

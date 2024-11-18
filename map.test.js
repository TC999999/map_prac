const { HashMap } = require("./map");

describe("Hash Map", function () {
  let hm;
  beforeAll(function () {
    hm = new HashMap();
    hm.set("apple", "red");
    hm.set("orange", "orange");
    hm.set("durian", "yellow");
    hm.set("grapes", "green");
    hm.set("blueberry", "blue");
    hm.set("eggplant", "purple");
    hm.set("pineapple", "yellow");
    hm.set("banana", "yellow");
    hm.set("peach", "pink");
    hm.set("cherry", "red");
    hm.set("avocado", "green");
    hm.set("mango", "yellow");
    hm.set("tangerine", "orange");
  });

  test("get() returns the value of the inputted key of the map", function () {
    expect(hm.get("grapes")).toEqual("green");
    expect(hm.get("blueberry")).toEqual("blue");
    expect(hm.get("apple")).toEqual("red");
    expect(hm.get("grapefruit")).toBeUndefined();
  });

  test("set() adds a key-value pair to the map", function () {
    expect(hm.get("clementine")).toBeUndefined();
    hm.set("clementine", "orange");
    expect(hm.get("clementine")).toEqual("orange");
  });

  test("has() returns a boolean on if the value of the inputted key is in the map", function () {
    expect(hm.has("grapes")).toBeTruthy();
    expect(hm.has("blueberry")).toBeTruthy();
    expect(hm.has("apple")).toBeTruthy();
    expect(hm.has("grapefruit")).toBeFalsy();
  });

  test("delete() deletes the key-value pair from the map", function () {
    expect(hm.has("clementine")).toBeTruthy();
    hm.delete("clementine");
    expect(hm.has("clementine")).toBeFalsy();
    expect(hm.delete("clementine")).toBeUndefined();
  });

  test("keys() returns an array of the keys of the map", function () {
    let keys = hm.keys();
    expect(keys).toContain("grapes");
    expect(keys).not.toContain("green");
    expect(keys).toContain("apple");
    expect(keys).not.toContain("red");
    expect(keys).toContain("blueberry");
    expect(keys).not.toContain("blue");
    expect(keys.length).toEqual(13);
  });

  test("values() returns an array of the values of the map", function () {
    let vals = hm.values();
    expect(vals).toContain("green");
    expect(vals).not.toContain("grapes");
    expect(vals).toContain("red");
    expect(vals).not.toContain("apple");
    expect(vals).toContain("blue");
    expect(vals).not.toContain("blueberry");
    expect(vals.length).toEqual(13);
  });

  test("entires() returns an array of the key-value pairs of the map", function () {
    let entries = hm.entries();
    expect(entries).toContainEqual(["grapes", "green"]);
    expect(entries).toContainEqual(["apple", "red"]);
    expect(entries).toContainEqual(["blueberry", "blue"]);
    expect(entries.length).toEqual(13);
  });
});

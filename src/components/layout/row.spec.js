import { loadFixture, testVM } from "../../utils/helpers";
import regeneratorRuntime from "regenerator-runtime";

describe("form-row", async () => {
    beforeEach(loadFixture("row", "layout"));
    testVM();

    it("default should contain base class", async () => {
        const { app: { $refs } } = window;
        expect($refs.default).toHaveClass("row");
    });

    it("custom should contain base class", async () => {
        const { app: { $refs } } = window;
        expect($refs.custom).toHaveClass("row");
    });

    it("noGutters should contain classes", async () => {
        const { app: { $refs } } = window;
        expect($refs.noGutters).toHaveClass("row");
        expect($refs.noGutters).toHaveClass("no-gutters");
    });

    it("default should have content", async () => {
        const { app: { $refs } } = window;
        expect($refs.default.textContent).toContain("default");
    });

    it("custom should have content", async () => {
        const { app: { $refs } } = window;
        expect($refs.custom.textContent).toContain("custom");
    });

    it("noGutters should have content", async () => {
        const { app: { $refs } } = window;
        expect($refs.noGutters.textContent).toContain("no gutters");
    });

    it("default should have tag div", async () => {
        const { app: { $refs } } = window;
        expect($refs.default).toBeElement("div");
    });

    it("custom should have tag p", async () => {
        const { app: { $refs } } = window;
        expect($refs.custom).toBeElement("p");
    });

    it("noGutters should have tag div", async () => {
        const { app: { $refs } } = window;
        expect($refs.noGutters).toBeElement("div");
    });


});

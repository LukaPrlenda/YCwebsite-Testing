import { describe, it, expect, beforeEach, vi } from "vitest";
import { check_stsus } from "../assets/js/index.js";

describe("Tests for check_stsus function checks if user is logged in and redirects it or writes out his username", () => {
    let usernameDisp;

    beforeEach(() => {
        document.body.innerHTML = `
            <header>
                <p id="hello_user"></p>
            </header>
            <div id="login_status_red">
            </div>
        `;
        localStorage.clear();
        localStorage.setItem("username", "Users name");
        vi.stubGlobal("location", {href: ""});
        usernameDisp = document.getElementById("hello_user");
    });

    it.each([
        ["", "#page_Login", ""],
        ["1", "", "~Hello Users name~"],
        ["a", "#page_Login", ""],
    ])("status '%s' should leave you on a page %s with username '%s'", (status, href, userDisp) => {

        localStorage.setItem("login_status", status);

        check_stsus();

        expect(window.location.href).toBe(href);
        expect(usernameDisp.innerHTML).toBe(userDisp);
    });

    it("login status is missing in local storage and HTML shoul be empty '' for username", () => {

        check_stsus();

        expect(window.location.href).toBe("#page_Login");
        expect(usernameDisp.innerHTML).toBe("");
    });
});
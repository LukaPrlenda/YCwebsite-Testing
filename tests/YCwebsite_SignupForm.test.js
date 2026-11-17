import { describe, it, expect, beforeEach } from "vitest";
import { password_strength_check, start_signup_js } from "../assets/js/YCwebsite_SignupForm.js";

describe("Tests for password_strength_check function", () => {
    let input;
    let strenghtDisp;

    beforeEach(() => {
        document.body.innerHTML = `
            <form>
                <input type="password" id="password" value="">
                <div>
                    <p id="password_strenght"></p>
                </div>               
            </form>
        `;
        input = document.getElementById("password");
        strenghtDisp = document.getElementById("password_strenght");
    });

    it.each([
        ["", "Not strong enough!"],
        ["1234", "Not strong enough!"],
        ["abcde", "Weak"],
        ["123456", "Weak"],
        ["abcdefg", "Good!"],
        ["123456789012", "Good!"],
        ["abcdefghijklm", "Amazing!"],
        //["The Test for a weary long password", "Amazing!"],
    ])("password '%s' gives password strength '%s'", (pwd, expected) => {

        input.value = pwd;

        password_strength_check();

        expect(strenghtDisp.innerHTML).toBe(expected);
    });
});
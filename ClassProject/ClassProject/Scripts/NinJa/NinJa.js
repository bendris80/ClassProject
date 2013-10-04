﻿//#region helper functions

function Null() { }

function NullOrUndefined(o) {
    return o === null || o === undefined;
}

//#endregion

//#region enumerations

var Type = function (o) {
    o.$ = 0;
    o.Anchor = o.$++;
    o.Array = o.$++;
    o.Button = o.$++;
    o.Body = o.$++;
    o.Cell = o.$++;
    o.CheckBox = o.$++;
    o.Color = o.$++;
    o.Cookie = o.$++;
    o.DropDownList = o.$++;
    o.ContentButton = o.$++;
    o.Date = o.$++;
    o.DateTime = o.$++;
    o.Delegate = o.$++;
    o.Dictionary = o.$++;
    o.Div = o.$++;
    o.Element = o.$++;
    o.Event = o.$++;
    o.EventArgs = o.$++;
    o.FauxEvent = o.$++;
    o.FileUpload = o.$++;
    o.Form = o.$++;
    o.Function = o.$++;
    o.Header = o.$++;
    o.HiddenField = o.$++;
    o.Image = o.$++;
    o.Label = o.$++;
    o.ListBox = o.$++;
    o.List = o.$++;
    o.ListItem = o.$++;
    o.Number = o.$++;
    o.ObservableArray = o.$++;
    o.Object = o.$++;
    o.Option = o.$++;
    o.RadioButton = o.$++;
    o.RadioButtonGroup = o.$++;
    o.Row = o.$++;
    o.Password = o.$++;
    o.Span = o.$++;
    o.String = o.$++;
    o.Table = o.$++;
    o.TableBody = o.$++;
    o.TableHead = o.$++;
    o.TableFoot = o.$++;
    o.TextArea = o.$++;
    o.TextBox = o.$++;
    o.TimeSpan = o.$++;
    o.Timer = o.$++;
    o.UserEvent = o.$++;
    o.Window = o.$++;
    return o;
}({});

var GridLines = {
    None: "none",
    Vertical: "cols",
    Horizontal: "rows",
    Both: "all"
};

var ButtonType = {
    Submit: "submit",
    Reset: "reset",
    Button: "button"
};

var uvt = {
    blr: "blur",
    chg: "change",
    clk: "click",
    ctx: "contextmenu",
    dbc: "dblclick",
    fcs: "focus",
    kyd: "keydown",
    kyp: "keypress",
    kyu: "keyup",
    ld: "load",
    mdn: "mousedown",
    mv: "mousemove",
    mov: "mouseover",
    mou: "mouseout",
    mup: "mouseup",
    mwl: "mousewheel",
    scl: "scroll",
    sbm: "submit",
    bul: "unload",
    tst: "touchstart",
    tmv: "touchmove",
    ten: "touchend"
};

var Keys = {};
var ASCII = {};

var BindingType = {
    Property: 0,
    Variable: 1,
    Function: 2,
    Map: 3
};

var Period = {
    AM: 0,
    PM: 1
};

var Colors = {
    AliceBlue: "#F0F8FF",
    AntiqueWhite: "#FAEBD7",
    Aqua: "#00FFFF",
    Aquamarine: "#7FFFD4",
    Azure: "#F0FFFF",
    Beige: "#F5F5DC",
    Bisque: "#FFE4C4",
    Black: "#000000",
    BlanchedAlmond: "#FFEBCD",
    Blue: "#0000FF",
    BlueViolet: "#8A2BE2",
    Brown: "#A52A2A",
    BurlyWood: "#DEB887",
    CadetBlue: "#5F9EA0",
    Chartreuse: "#7FFF00",
    Chocolate: "#D2691E",
    Coral: "#FF7F50",
    CornflowerBlue: "#6495ED",
    Cornsilk: "#FFF8DC",
    Crimson: "#DC143C",
    Cyan: "#00FFFF",
    DarkBlue: "#00008B",
    DarkCyan: "#008B8B",
    DarkGoldenRod: "#B8860B",
    DarkGray: "#A9A9A9",
    DarkGreen: "#006400",
    DarkKhaki: "#BDB76B",
    DarkMagenta: "#8B008B",
    DarkOliveGreen: "#556B2F",
    Darkorange: "#FF8C00",
    DarkOrchid: "#9932CC",
    DarkRed: "#8B0000",
    DarkSalmon: "#E9967A",
    DarkSeaGreen: "#8FBC8F",
    DarkSlateBlue: "#483D8B",
    DarkSlateGray: "#2F4F4F",
    DarkTurquoise: "#00CED1",
    DarkViolet: "#9400D3",
    DeepPink: "#FF1493",
    DeepSkyBlue: "#00BFFF",
    DimGray: "#696969",
    DodgerBlue: "#1E90FF",
    Empty: "",
    FireBrick: "#B22222",
    FloralWhite: "#FFFAF0",
    ForestGreen: "#228B22",
    Fuchsia: "#FF00FF",
    Gainsboro: "#DCDCDC",
    GhostWhite: "#F8F8FF",
    Gold: "#FFD700",
    GoldenRod: "#DAA520",
    Gray: "#808080",
    Green: "#008000",
    GreenYellow: "#ADFF2F",
    HoneyDew: "#F0FFF0",
    HotPink: "#FF69B4",
    IndianRed: "#CD5C5C",
    Indigo: "#4B0082",
    Ivory: "#FFFFF0",
    Khaki: "#F0E68C",
    Lavender: "#E6E6FA",
    LavenderBlush: "#FFF0F5",
    LawnGreen: "#7CFC00",
    LemonChiffon: "#FFFACD",
    LightBlue: "#ADD8E6",
    LightCoral: "#F08080",
    LightCyan: "#E0FFFF",
    LightGoldenRodYellow: "#FAFAD2",
    LightGray: "#D3D3D3",
    LightGreen: "#90EE90",
    LightPink: "#FFB6C1",
    LightSalmon: "#FFA07A",
    LightSeaGreen: "#20B2AA",
    LightSkyBlue: "#87CEFA",
    LightSlateGray: "#778899",
    LightSteelBlue: "#B0C4DE",
    LightYellow: "#FFFFE0",
    Lime: "#00FF00",
    LimeGreen: "#32CD32",
    Linen: "#FAF0E6",
    Magenta: "#FF00FF",
    Maroon: "#800000",
    MediumAquaMarine: "#66CDAA",
    MediumBlue: "#0000CD",
    MediumOrchid: "#BA55D3",
    MediumPurple: "#9370D8",
    MediumSeaGreen: "#3CB371",
    MediumSlateBlue: "#7B68EE",
    MediumSpringGreen: "#00FA9A",
    MediumTurquoise: "#48D1CC",
    MediumVioletRed: "#C71585",
    MidnightBlue: "#191970",
    MintCream: "#F5FFFA",
    MistyRose: "#FFE4E1",
    Moccasin: "#FFE4B5",
    NavajoWhite: "#FFDEAD",
    Navy: "#000080",
    OldLace: "#FDF5E6",
    Olive: "#808000",
    OliveDrab: "#6B8E23",
    Orange: "#FFA500",
    OrangeRed: "#FF4500",
    Orchid: "#DA70D6",
    PaleGoldenRod: "#EEE8AA",
    PaleGreen: "#98FB98",
    PaleTurquoise: "#AFEEEE",
    PaleVioletRed: "#D87093",
    PapayaWhip: "#FFEFD5",
    PeachPuff: "#FFDAB9",
    Peru: "#CD853F",
    Pink: "#FFC0CB",
    Plum: "#DDA0DD",
    PowderBlue: "#B0E0E6",
    Purple: "#800080",
    Red: "#FF0000",
    RosyBrown: "#BC8F8F",
    RoyalBlue: "#4169E1",
    SaddleBrown: "#8B4513",
    Salmon: "#FA8072",
    SandyBrown: "#F4A460",
    SeaGreen: "#2E8B57",
    SeaShell: "#FFF5EE",
    Sienna: "#A0522D",
    Silver: "#C0C0C0",
    SkyBlue: "#87CEEB",
    SlateBlue: "#6A5ACD",
    SlateGray: "#708090",
    Snow: "#FFFAFA",
    SpringGreen: "#00FF7F",
    SteelBlue: "#4682B4",
    Tan: "#D2B48C",
    Teal: "#008080",
    Thistle: "#D8BFD8",
    Tomato: "#FF6347",
    Turquoise: "#40E0D0",
    Violet: "#EE82EE",
    Wheat: "#F5DEB3",
    White: "#FFFFFF",
    WhiteSmoke: "#F5F5F5",
    Yellow: "#FFFF00",
    YellowGreen: "#9ACD32"
};

var Cursor = {
    Auto: "auto",
    ColumnResize: "col-resize",
    CrossHair: "crosshair",
    Default: "default",
    East: "e-resize",
    Inherit: "inherit",
    Help: "help",
    Move: "move",
    North: "n-resize",
    NorthEast: "ne-resize",
    NorthWest: "nw-resize",
    Pointer: "pointer",
    Progress: "progress",
    RowResize: "row-resize",
    South: "s-resize",
    SouthEast: "se-resize",
    SouthWest: "sw-resize",
    Text: "text",
    West: "w-resize",
    Wait: "wait"
};

var ModificationType = {
    Add: 1,
    Remove: 2,
    Clear: 3,
    Update: 4,
    Swap: 5,
    Move: 6
};

var Modifiers = {
    None: 0,
    ShiftKey: 1,
    AltKey: 2,
    ControlKey: 4
};

var FormMethod = {
    Get: "get",
    Post: "post"
};

var EncodingType = {
    UrlEncoded: "application/x-www-form-urlencoded",
    FormData: "multipart/form-data",
    Text: "text/plain"
};

var BrowserType = {
    InternetExplorer: 1,
    MozillaFirefox: 2,
    GoogleChrome: 3,
    Safari: 4,
    Opera: 5,
    Android: 6,
    iPad: 7,
    Unknown: -1
};

var Style = {
    Background: "background",
    BackgroundAttachment: "backgroundAttachment",
    BackgroundColor: "backgroundColor",
    BackgroundImage: "backgroundImage",
    BackgroundPosition: "backgroundPosition",
    BackgroundRepeat: "backgroundRepeat",
    Border: "border",
    BorderBottom: "borderBottom",
    BorderBottomColor: "borderBottomColor",
    BorderBottomStyle: "borderBottomStyle",
    BorderBottomWidth: "borderBottomWidth",
    BorderColor: "borderColor",
    BorderCollapse: "borderCollapse",
    BorderLeft: "borderLeft",
    BorderLeftColor: "borderLeftColor",
    BorderLeftStyle: "borderLeftStyle",
    BorderLeftWidth: "borderLeftWidth",
    BorderRight: "borderRight",
    BorderRightColor: "borderRightColor",
    BorderRightStyle: "borderRightStyle",
    BorderRightWidth: "borderRightWidth",
    BorderStyle: "borderStyle",
    BorderTop: "borderTop",
    BorderTopColor: "borderTopColor",
    BorderTopStyle: "borderTopStyle",
    BorderTopWidth: "borderTopWidth",
    BoxSizing: "",
    Bottom: "bottom",
    Clear: "clear",
    Color: "color",
    ForegroundColor: "color",
    Cursor: "cursor",
    Display: "display",
    Filter: "filter",
    Font: "font",
    FontFamily: "fontFamily",
    FontSize: "fontSize",
    FontVariant: "fontVariant",
    FontWeight: "fontWeight",
    Height: "height",
    Left: "left",
    LetterSpacing: "letterSpacing",
    LineHeight: "lineHeight",
    ListStyle: "listStyle",
    ListStyleImage: "listStyleImage",
    ListStylePosition: "listStylePosition",
    ListStyleType: "listStyleType",
    Margin: "margin",
    MarginBottom: "marginBottom",
    MarginLeft: "marginLeft",
    MarginRight: "marginRight",
    MarginTop: "marginTop",
    Padding: "padding",
    PaddingBottom: "paddingBottom",
    PaddingLeft: "paddingLeft",
    PaddingRight: "paddingRight",
    PaddingTop: "paddingTop",
    PageBreakAfter: "pageBreakAfter",
    PageBreakBefore: "pageBreakBefore",
    Position: "position",
    Right: "right",
    Float: "float",
    Opacity: "opacity",
    Overflow: "overflow",
    TableLayout: "tableLayout",
    TextAlign: "textAlign",
    TextDecoration: "textDecoration",
    TextIndent: "textIndent",
    TextTransform: "textTransform",
    Top: "top",
    VerticalAlign: "verticalAlign",
    Visibility: "visibility",
    Width: "width",
    WhiteSpace: "whiteSpace",
    ZIndex: "zIndex",
    Zoom: "zoom"
};

var BulletType = {
    Disc: "disc",
    Circle: "circle",
    None: "none",
    Square: "square",
    Decimal: "decimal",
    LowerRoman: "lower-roman",
    UpperRoman: "upper-roman"
};
//#endregion

//#region Math extensions
Math.Random = function (f, t) {
    if (f !== undefined) {
        if (t === undefined) {
            t = f;
            f = 0;
        }
    }
};
//#endregion

//#region Boolean extensions
Boolean.Compare = function (a, b) {
    return a == b ? 0 : (a == true ? 1 : -1);
};

Boolean.prototype.Compare = function (b) {
    return this == b ? 0 : (this == true ? 1 : -1);
};

Boolean.prototype.ToOneZero = function () {
    return this == true ? 1 : 0;
};

Boolean.prototype.ToYN = function () {
    return this == true ? "y" : "n";
};

Boolean.prototype.ToYesNo = function () {
    return this == true ? "Yes" : "No";
};

Boolean.prototype.ToOnOff = function () {
    return this == true ? "on" : "off";
};
//#endregion

//#region Date extensions
Date.prototype.Type = Type.Date;
Date.Compare = function (a, b) {
    return ((a < b) ? -1 : ((a > b) ? 1 : 0));
};

Date.prototype.Compare = function (b) {
    return ((this < b) ? -1 : ((this > b) ? 1 : 0));
};

Date.prototype.Equals = function (d) {
    if (d.Type === Type.Date || d.Type === Type.DateTime) {
        return this == d;
    }

    return false;
};

Date.prototype.ToString = function (w) {
    if (this.Equals(DateTime.Null)) { return ""; }

    var ap = this.getHours() > 12 ? "PM" : "AM", h = this.getHours() % 12, m = this.getMinutes(), s = this.getSeconds(), y = this.getFullYear();
    if (h === 0) { h = 12; }
    if (y < 1000) {
        y += 1900;
    }

    if (w) { return (this.getMonth() + 1) + "/" + this.getDate() + "/" + y + " " + (h % 12) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + " " + ap; }
    else { return (this.getMonth() + 1) + "/" + this.getDate() + "/" + y; }
};
//#endregion

//#region Number extensions
Number.prototype.Type = Type.Number;
Number.Compare = function (a, b) {
    return ((a < b) ? -1 : ((a > b) ? 1 : 0));
};

Number.prototype.ToString = function (b, p) {
    b = b == undefined ? 10 : b;
    var cs = this.toString(b);
    while (cs.length < p) {
        cs = "0" + cs;
    }
    return cs;
};

Number.prototype.IsFlagged = function (v) {
    return (this & v) > 0;
};

Number.prototype.Between = function (a, b, i) {
    i = i || false;
    if (!i) {
        return this > a && this < b;
    }

    return this >= a && this <= b;
};

Number.prototype.Compare = function (b) {
    return ((this < b) ? -1 : ((this > b) ? 1 : 0));
};

Number.prototype.Round = function (s) {
    if (s === undefined) {
        s = 0;
    }

    var a = Math.round(this / Math.pow(10, s), 10);
    return a * Math.pow(10, s);
};

Number.prototype.Floor = function () {
    return parseInt(this, 10);
};

Number.prototype.Ceil = function () {
    return parseInt(this, 10) + 1;
};

Number.prototype.FormatCurrency = function (d) {
    return "$" + this.FormatNumber(d);
}

Number.prototype.FormatNumber = function (d) {
    return this.toString().FormatNumber(d);
}
//#endregion

//#region Function extensions
Function.prototype.Type = Type.Function;

Function.prototype.Inherit = function (o) {
    var a = Array.From(arguments);
    a.splice(0, 1);
    this.apply(o, a);
    return o;
};

Function.prototype.Extend = function (o) {
    for (var p in this.prototype) {
        o[p] = this.prototype[p];
    }

    return o;
};

Function.prototype.New = function () {
    var a = arguments;
    var c = this;
    function f() {
        c.apply(this, a)
    }
    f.prototype = c.prototype;
    return new f();
}

//#endregion

//#region String extensions
String.prototype.Type = Type.String;
String.RegularExpressionChars = "\\^${}[]().*+?|<>-&";
String.BindRegEx = /\{[A-Za-z0-9 -_.()#@*]*}/i;
String.BindFormat = function (s, o) {
    var a = NinJa, p, property, v;
    if (o === undefined || o === null || s == "") {
        return "";
    }

    s = s.Replace("{{", escape("{")).Replace("}}", escape("}"));
    do {
        property = String.BindRegEx.exec(s);
        if (property) {
            p = property[0];
            v = a.EvalBind(p.Remove("{").Remove("}"), o);
            if (NullOrUndefined(v)) {
                v = "";
            }
            s = s.Replace(p, v);
        }
    } while (property);

    return s;
};

String.Format = function (s, a) {
    var cs = s, i, v, l = a.length;

    cs = cs.Replace("{{}", escape("{")).Replace("{}}", escape("}"));
    for (i = 0; i < l; i++) {
        v = a[i];
        if (!NullOrUndefined(v)) {
            cs = cs.Replace("{" + i + "}", escape(v));
        }
    }

    return unescape(cs);
};

String.IsNullOrEmpty = function (s) {
    return s === undefined || s === null || s.length == 0;
};

String.Compare = function (a, b) {
    return ((a < b) ? -1 : ((a > b) ? 1 : 0));
};

String.prototype.Compare = function (b) {
    return ((this < b) ? -1 : ((this > b) ? 1 : 0));
};

String.prototype.Append = function (s) {
    return this + s;
};

String.prototype.Contains = function (s, i) {
    var sc = this;

    if (i) {
        sc = this.toLowerCase();
        s = s.toLowerCase();
    }

    return sc.indexOf(s) > -1;
};

String.prototype.Decode = function () {
    return unescape(this);
};

String.prototype.Encode = function () {
    return encodeURIComponent(this);
};

String.prototype.Equals = function (s) {
    return this == s;
};

String.Vowels = ['a', 'e', 'i', 'o', 'u'];
String.prototype.FormatPlural = function (n) {
    if (n != 1) {
        if (this.EndsWith("y")) {
            var v = this[this.length - 2];
            if (!String.Vowels.Contains(v)) {
                return this.Remove("y") + "ies";
            }
        }
        return this + "s";
    }

    return this;
};

String.prototype.FilterAlpha = function () {
    var l = this.length;
    var s = "";
    var v;
    for (var i = 0; i < l; i++) {
        v = this.charAt(i);
        if ((v >= 'A' && v <= 'Z') || (v >= 'a' && v <= 'z')) {
            s += v;
        }
    }

    return s;
};

String.prototype.FilterNumeric = function (d) {
    var l = this.length, s = "", v, d = d || [];
    for (var i = 0; i < l; i++) {
        v = this.charAt(i);
        if ((v >= '0' && v <= '9') || (d.Contains(v))) {
            s += v;
        }
    }

    return s;
};

String.prototype.FormatPercentage = function () {
    var a = this.Trim().FilterNumeric(['.']), f;
    if (a.length == 0) { return ""; }
    return a + "%";
}

String.prototype.FormatPhone = function () {
    var a = this.Trim().FilterNumeric(), f;
    if (a.length == 0) { return ""; }
    if (a.length < 8) {
        a = a.PadLeft(7)
        f = "{0}{1}{2}-{3}{4}{5}{6}";
    }
    else {
        a = a.PadLeft(10);
        f = "({0}{1}{2}) {3}{4}{5}-{6}{7}{8}{9}";
    }
    return String.Format(f, a.ToCharArray());
}

String.prototype.FormatTaxID = function (t) {
    var a = this.Trim().FilterNumeric(), f;
    if (a.length == 0) { return ""; }
    t = t || "S";
    a = a.PadLeft(9)
    if (t.toUpperCase() == "T") {
        f = "{0}{1}-{2}{3}{4}{5}{6}{7}{8}";
    }
    else {
        f = "{0}{1}{2}-{3}{4}-{5}{6}{7}{8}";
    }
    return String.Format(f, a.ToCharArray());
};

String.prototype.FormatNumber = function (d) {
    if (this.length === 0) { return ""; }
    if (d === undefined) {
        d = 2;
    }

    var a = this.Trim().Split(".");
    a[0] = a[0].FilterNumeric(['-']);
    if (a[1] !== undefined) {
        a[1] = a[1].FilterNumeric();
    }
    var b = "";
    var m = a[0][0];
    if (m == '-') {
        a[0] = a[0].Remove("-");
    }

    for (var i = a[0].length - 1, j = 0; i > -1; i--, j++) {
        if (j > 0 && j % 3 === 0) {
            b = "," + b;
        }
        b = a[0][i] + b;
    }
    if (d > 0 && a[1] == undefined) {
        a[1] = "";
    }

    if (m == "-") {
        b = "-" + b;
    }

    if (a[1] !== undefined) {
        a[1] = a[1].Substring(0, d).PadRight(d, "0");
        return b + "." + a[1];
    }

    return b;
}

String.prototype.FormatCurrency = function (d) {
    if (this.Trim().length == 0) { return this; }
    return "$" + this.FormatNumber(d);
}

String.prototype.IndexOf = function (t, s) {
    return this.indexOf(t, s);
};

String.prototype.Insert = function (i, s) {
    if (this.length < i) {
        return this + s;
    }

    return this.Substring(0, i) + s + this.Substring(i);
};

String.prototype.IsDate = function () {
    var t = this.Trim().Split(this.Contains("-") ? "-" : "/", false);
    if (t.length != 3) { return false; }
    var m = t[0].IsInt() ? t[0].ToInt() : -1, d = t[1].IsInt() ? t[1].ToInt() : -1, y = t[2].IsInt() ? t[2].ToInt() : -1;

    if (y > 0 && y < 30) { y += 2000; }
    if (y > 0 && y < 100) { y += 1900; }

    return !(m < 1 || m > 12 || d < 1 || y < 0 || d > DateTime.Months.GetDays(m, y));
};

String.prototype.IsDateTime = function () {
    var s = this.Trim(), i = s.IndexOf(" ");
    if (i == -1) {
        return s.IsDate();
    }

    var u = s.Substring(0, i++), v = s.Substring(i);
    return u.IsDate() && v.IsTime();
};

String.prototype.IsTime = function () {
    if (!this.Contains(":")) { return false; }
    var t = this.Trim().toLowerCase().Remove(".").Split(":"), h, m, s, p;
    if (t.length == 2) {
        h = t[0].IsInt() ? t[0].ToInt() : -1;
        if (t[1].IsInt()) {
            m = t[1].ToInt();
            p = h > 12 ? Period.PM : Period.AM;
            h = h == 0 ? 12 : (h > 12 ? h - 12 : h);
        }
        else if (t[1].Contains("am")) {
            p = Period.AM;
            t[1] = t[1].Remove("am").Trim();
            m = t[1].IsInt() ? t[1].ToInt() : -1;
        }
        else if (t[1].Contains("pm")) {
            p = Period.PM;
            t[1] = t[1].Remove("pm").Trim();
            m = t[1].IsInt() ? t[1].ToInt() : -1;
        }
        else {
            return false;
        }

        s = 0;
    }
    if (t.length == 3) {
        h = t[0].IsInt() ? t[0].ToInt() : -1;
        m = t[0].IsInt() ? t[1].ToInt() : -1;
        if (t[2].IsInt()) {
            s = t[2].ToInt();
            p = h > 12 ? Period.PM : Period.AM;
            h = h == 0 ? 12 : (h > 12 ? h - 12 : h);
        }
        else if (t[2].Contains("am")) {
            p = Period.AM;
            t[2] = t[2].Remove("am").Trim();
            s = t[2].IsInt() ? t[1].ToInt() : -1;
        }
        else if (t[2].Contains("pm")) {
            p = Period.PM;
            t[2] = t[2].Remove("pm").Trim();
            s = t[2].IsInt() ? t[1].ToInt() : -1;
        }
        else {
            return false;
        }
    }

    return h > 0 && h < 13 && m > -1 && m < 60 && s > -1 && s < 60;
};

String.prototype.IsCurrency = function () {
    return this.RemoveAll("$").RemoveAll(",").IsFloat();
};

String.prototype.IsFloat = function () {
    return this.Trim().length > 0 && !isNaN(this);
};

String.prototype.IsInt = function () {
    return this.Trim().length > 0 && !isNaN(this) && this.indexOf(".") == -1;
};

String.prototype.LastIndexOf = function (t, s) {
    return this.lastIndexOf(t, s);
};

String.prototype.MakeLinks = function (t) {
    return this.replace(new RegExp("(https?://([-\\w\\.]+)+(:\\d+)?(/([\\w/_\\.]*(\\?\\S+)?)?)?)", "gi"), "<a href='$1' target='" + t + "'>$1</a>");
};

String.prototype.PadLeft = function (n, c) {
    c = c || " ";
    if (this.length >= n) {
        return this;
    }

    var m = n - this.length, s = this;
    do {
        s = c + s;
        m--;
    }
    while (m > 0);

    return s;
};

String.prototype.PadRight = function (n, c) {
    c = c || " ";
    if (this.length >= n) {
        return this;
    }

    var m = n - this.length, s = this;
    do {
        s = s + c;
        m--;
    }
    while (m > 0);

    return s;
};

String.prototype.Prepend = function (s) {
    return s + this;
};

String.prototype.Remove = function (t) {
    if (this.length === 0) { return this; }
    return this.replace(t, "");
};

String.prototype.RemoveAll = function (t) {
    if (this.length === 0) { return this; }
    var a = this;
    while (a.indexOf(t) > -1) {
        a = a.replace(t, "");
    }

    return a;
};

String.prototype.RemoveSubstring = function (s, e) {
    var r = "";
    r = this.Substring(0, s);
    if (e < this.length) {
        r += this.Substring(e);
    }

    return r;
};

String.prototype.Replace = function (k, l, i) {
    var t = escape(k), v = escape(l), rx = new RegExp(t, i ? "gi" : "g");

    return unescape(escape(this).replace(rx, v));
};

String.prototype.Split = function (t, r) {
    var sa = this.split(t), l = sa.length, i;

    r = r === undefined ? true : r;
    if (r) {
        for (i = l - 1; i > -1; i--) {
            if (sa[i] === "") { sa.splice(i, 1); }
        }
    }

    return sa;
};

String.prototype.StartsWith = function (s, i) {
    var v = this;
    if (i) {
        v = this.toLowerCase();
        s = s.toLowerCase();
    }

    return v.IndexOf(s) === 0;
};

String.prototype.EndsWith = function (s, i) {
    var v = this;
    if (i) {
        v = this.toLowerCase();
        s = s.toLowerCase();
    }

    return v.LastIndexOf(s) === v.length - s.length;
};

String.prototype.Substring = function (s, e) {
    if (e === undefined) {
        if (this.length < s) {
            return "";
        }

        return this.substring(s);
    }
    else {
        if (e > this.length) {
            return this.substring(s);
        }
        else if (e < 0) {
            return this.substring(s);
        }
        else {
            return this.substring(s, e);
        }
    }
};

String.prototype.ToString = function () {
    return this;
}

String.prototype.Truncate = function (m, s) {
    s = s || "..."

    if (this.length > m) {
        return this.Subsing(0, m) + s;
    }

    return this;
};

String.prototype.ToCharArray = function () {
    var a = [], i; l = this.length;
    for (i = 0; i < l; i++) {
        a.push(this.charAt(i));
    }

    return a;
};

String.prototype.ToColor = function () {
    return new Color(this);
};

String.prototype.ToCurrency = function () {
    if (this.length === 0) { return 0; }
    if (!this.IsCurrency()) { throw ("Invalid cast exception. Try IsCurrency()"); }
    return parseFloat(this.Remove("$").RemoveAll(","));
};

String.prototype.ToInt = function (b) {
    b = b || 10;
    if (this.length === 0) { return 0; }
    return parseInt(this, b);
};

String.prototype.ToFloat = function () {
    if (this.length === 0) { return 0; }
    if (!this.IsFloat()) { throw ("Invalid cast exception. Try IsFloat()"); }
    return parseFloat(this);
};


String.prototype.ToBoolean = function () {
    var s = this.toLowerCase()[0];
    return s == "t" || s == "y";
};

String.prototype.ToDateTime = function (b) {
    return new DateTime().Value(new Date(this));
};

String.prototype.ToLower = function () {
    return this.toLowerCase();
};

String.prototype.ToUpper = function () {
    return this.toUpperCase();
};

String.prototype.Trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
};

String.prototype.TrimLeft = function () {
    return this.replace(/^\s+/, "");
};

String.prototype.TrimRight = function () {
    return this.replace(/\s+$/, "");
};
//#endregion

//#region Array extensions
Array.prototype.Type = Type.Array;
Array.From = function (o) {
    var a = [], l = o.length, i;
    for (i = 0; i < l; i++) {
        a.push(o[i]);
    }

    return a;
};

Array.prototype.Add = function (o) {
    var l = this.length;
    if (this.$$ === true) {
        if (this.Contains(o)) {
            return this;
        }
    }
    this.push(o);

    if (this.$ == true) {
        if (!this.Updating && this.OnChange.length > 0) {
            this.OnChange.Fire(new ArrayEventArgs([o], ModificationType.Add, l, this));
        }
    }
    return this;
};

Array.prototype.AddRange = function (a) {
    var l = a.length, k = this.length, i;
    for (i = 0; i < l; i++) {
        if (this.$$ === true) {
            if (this.Contains(a[i])) {
                continue;
            }
        }
        this.push(a[i]);
    }

    if (this.$ === true) {
        if (this.Updating === false && this.OnChange.length > 0) {
            this.OnChange.Fire(new ArrayEventArgs(a, ModificationType.Add, k, this));
        }
    }
    return this;
};

Array.prototype.Clear = function () {
    var a = this.splice(0, this.length);

    if (this.$ == true) {
        if (!this.Updating && this.OnChange.length > 0) {
            this.OnChange.Fire(new ArrayEventArgs(a, ModificationType.Clear, 0, this));
        }
    }
    return this;
};

Array.prototype.Copy = function () {
    return this.slice();
};

Array.prototype.Insert = function (i, o) {
    this.splice(i, 0, o);

    if (this.$ == true) {
        if (!this.Updating && this.OnChange.length > 0) {
            this.OnChange.Fire(new ArrayEventArgs([o], ModificationType.Add, i, this));
        }
    }
    return this;
};

Array.prototype.Last = function () {
    return this[this.length - 1];
};

Array.prototype.Move = function (x, y) {
    var p = x, o = this[p] = {}, i;

    if (y > p) {
        y++;
    }

    this.splice(y, 0, x);
    var l = this.length;
    for (i = 0; i < l; i++) {
        if (this[i] === o) {
            this.splice(i, 1);
            break;
        }
    }

    if (this.$ == true) {
        if (!this.Updating && this.OnChange.length > 0) {
            var a = new ArrayEventArgs([x], ModificationType.Move, y, this);
            a.Index2 = i;
            this.OnChange.Fire(a);
        }
    }
    return this;
};

Array.prototype.Swap = function (x, y) {
    var i1 = x, i2 = y;

    x = this[i1];
    y = this[i2];

    if (i1 > -1 && i2 > -1) {
        this[i1] = y;
        this[i2] = x;
    }

    if (this.$ == true) {
        if (!this.Updating && this.OnChange.length > 0) {
            var a = new ArrayEventArgs([this[i1], this[i2]], ModificationType.Swap, i1, this);
            a.Index2 = i2;
            this.OnChange.Fire(a);
        }
    }
    return this;
};

Array.prototype.ToString = function (d) {
    d = d || ",";
    if (this.length == 0) {
        return "";
    }

    if (this.length == 1) {
        return this[0];
    }

    var s = "";
    var max = this.length - 1;
    for (var i = 0; i < max; i++) {
        s += this[i] + d;
    }

    s += this[max];

    return s;
};

Array.prototype.Contains = function (o) {
    return this.IndexOf(o) > -1;
};

Array.prototype.Find = function (f) {
    var a, i, l = this.length;
    for (i = 0; i < l; i++) {
        a = this[i];
        if (f(a)) {
            return a;
        }
    }

    return null;
};

Array.prototype.FindAll = function (f) {
    var r = [], a, i, l = this.length;
    for (i = 0; i < l; i++) {
        a = this[i];
        if (f(a)) {
            r.push(a);
        }
    }

    return r;
};

Array.prototype.ForEach = function (f) {
    var k = true, c = this.slice(), e = new IterationEventArgs(), l = c.length, i = 0;
    e.Sender = this;
    while (i < l) {
        e.Index = i;
        e.Navigate = 1;
        e.Object = c[i];
        k = f(e.Object, e);
        if (e.CancelEvent || k === false) { return; }
        i += e.Navigate;
    }
    return this;
};

Array.prototype.ForEachReversed = function (f) {
    var k = true, c = this.slice(), e = new IterationEventArgs(), max = c.length - 1, i = max;
    e.Sender = this;
    while (i > -1) {
        e.Index = i;
        e.Object = c[i--];
        k = f(e.Object, e);
        if (e.CancelEvent || k === false) { return; }
        if (e.Navigate) {
            i -= e.Navigate;
            e.Navigate = 0;
        }
    }
    return this;
};

Array.prototype.IndexOf = function (o) {
    var l = this.length, i, v;
    for (i = 0; i < l; i++) {
        v = this[i];
        if (v.Equals !== undefined) {
            if (v.Equals(o)) { return i; }
        }

        if (v == o) { return i; }
    }

    return -1;
};

Array.prototype.Replace = function (x, o, e) {
    var i, l = this.length;

    if (e) {
        for (i = 0; i < l; i++) {
            if (this[i][e] == x[e]) {
                this[i] = o;
            }
        }
    }
    else {
        for (i = 0; i < l; i++) {
            if (this[i] == x) {
                this[i] = o;
            }
        }
    }

    if (this.$ == true) {
        if (!this.Updating && this.OnChange.length > 0) {
            this.OnChange.Fire(new ArrayEventArgs([o], ModificationType.Remove, x, this));
            this.OnChange.Fire(new ArrayEventArgs([o], ModificationType.Add, x, this));
        }
    }
    return this;
};

Array.prototype.Remove = function (o) {
    var l = this.length, x = -1, i;
    for (i = 0; i < l; i++) {
        if (this[i] === o) {
            this.splice(i, 1); x = i; break;
        }
    }

    if (x > -1) {
        if (this.$ == true) {
            if (!this.Updating && this.OnChange.length > 0) {
                this.OnChange.Fire(new ArrayEventArgs(Array.From(arguments), ModificationType.Remove, x, this));
            }
        }
    }
    return this;
};

Array.prototype.RemoveRange = function (r) {
    var l = this.length - 1, a = r.slice();
    if (l <= 0 || a.length == 0) { return this; }
    do {
        var m = a.length - 1;
        do {

            if (this[l] == a[m]) {
                this.splice(l, 1);
                a.splice(m, 1);
                break;
            }
        } while (m--);
    } while (l--);

    if (this.$ == true) {
        if (!this.Updating && this.OnChange.length > 0) {
            this.OnChange.Fire(new rEventArgs(r, ModificationType.Remove, -1, this));
        }
    }
    return this;
};

Array.prototype.RemoveAt = function (x) {
    if (this.length < x) { throw ("Out of range."); }

    var a = this.splice(x, 1);

    if (this.$ == true) {
        if (!this.Updating && this.OnChange.length > 0) {
            this.OnChange.Fire(new ArrayEventArgs(a, ModificationType.Remove, x, this));
        }
    }

    return this;
};

Array.prototype.ShiftLeft = function (x) {
    if (x == 0) {
        return this;
    }

    return this.Swap(x, x - 1);
};

Array.prototype.ShiftRight = function (x) {
    if (x >= this.length - 1) {
        return this;
    }

    return this.Swap(x, x + 1);
};

//#endregion

//#region NinJa objects

function Delegate(f, n, p) {
    if (f === undefined) { throw "Undefined function in delegate."; }
    function Execute(eventArgs) {
        if (!m.Enabled) { return true; }

        if (m.Caller === null) {
            m.Caller = window;
        }
        var a = m.Parameters.Copy();
        a.Replace(Delegate.Event, eventArgs);
        return m.Function.apply(m.Caller, a);
    }

    var m = Execute;
    m.Function = f;
    m.Caller = n;
    m.Parameters = p || [];
    m.Type = Type.Delegate;
    m.Enabled = true;

    return Execute;
}

Delegate.Event = "@_@";


function ObservableArray(o) {
    var a = [];
    a.$ = true;
    a.BeginUpdate = ObservableArray.prototype.BeginUpdate;
    a.EndUpdate = ObservableArray.prototype.EndUpdate;
    a.OnChange = new Event(this);
    a.Owner = o;
    a.Type = Type.ObservableArray;
    a.Updating = false;
    return a;
}
ObservableArray.prototype = new Array();
ObservableArray.constructo = ObservableArray;
ObservableArray.prototype.BeginUpdate = function () {
    this.Updating = true;
    return this;
};

ObservableArray.prototype.EndUpdate = function (n) {
    this.Updating = false;
    n = n || true;
    if (this.OnChange.length > 0) {
        this.OnChange.Fire(new ArrayEventArgs(this, ModificationType.Update, 0, this));
    }
    return this;
};

function ClassArray(owner) {
    var i, a = new ObservableArray(owner), s = owner.DOM.className.Split(" ");
    a.OnChange.push(ClassArray.Refresh);

    for (i = 0; i < s.length; i++) {
        a.push(s[i]);
    }
    a.$$ = true;
    return a;
}

ClassArray.Refresh = function (e) {
    var a = e.Sender, b = a.length, c = "", d = a.Owner.DOM, f;
    for (f = 0; f < b; f++) {
        if (!c) {
            c = a[f];
        }
        else {
            c += " " + a[f];
        }
    }

    d.className = c;
    return this;
};

function RowArray(o) {
    return new ObservableArray(o);
}

function KeyValuePair(key, value) {
    this.Key = key;
    this.Value = value;
}

function Browser() {
    navigator.userAgent
    var bi = navigator.userAgent.toLowerCase(), p = bi.Split(" "), v, s, c;
    if (bi.Contains("firefox")) {
        this.Type = BrowserType.MozillaFirefox;
        this.Name = "Firefox";
        this.FullVersion = bi.Substring(bi.LastIndexOf("/") + 1);
        v = this.FullVersion.Split(".");
        c = (v[0] + "." + (v[1] !== undefined ? v[1] : ")"));
        this.Version = c.IsFloat() ? c.ToFloat() : 0;
    }
    else if (bi.Contains("chrome")) {
        this.Type = BrowserType.GoogleChrome;
        this.Name = "Chrome";
        this.FullVersion = bi.Substring(bi.LastIndexOf("chrome/") + 7, bi.LastIndexOf(" safari"));
        v = this.FullVersion.Split(".");
        c = (v[0] + "." + (v[1] !== undefined ? v[1] : ")"));
        this.Version = c.IsFloat() ? c.ToFloat() : 0;
    }
    else if (bi.Contains("msie")) {
        this.Type = BrowserType.InternetExplorer;
        this.Name = "Internet Explorer";
        s = bi.IndexOf("msie ");
        this.FullVersion = bi.Substring(s + 5, bi.IndexOf(";", s));
        v = this.FullVersion.Split(".");
        c = (v[0] + "." + (v[1] !== undefined ? v[1] : ")"));
        this.Version = c.IsFloat() ? c.ToFloat() : 0;
    }
    else if (bi.Contains("ipad")) {
        this.Type = BrowserType.iPad;
        this.Name = "iPad";
        s = bi.IndexOf("version/");
        this.FullVersion = bi.Substring(s + 8, bi.IndexOf("mobile")).Trim();
        v = this.FullVersion.Split(".");
        c = (v[0] + "." + (v[1] !== undefined ? v[1] : "0"));
        this.Version = c.IsFloat() ? c.ToFloat() : 0;
    }
    else if (bi.Contains("safari")) {
        this.Type = BrowserType.Safari;
        this.Name = "Safari";
        s = bi.IndexOf("version/");
        this.FullVersion = bi.Substring(s + 8, bi.IndexOf(" ", s));
        v = this.FullVersion.Split(".");
        c = (v[0] + "." + (v[1] !== undefined ? v[1] : ")"));
        this.Version = c.IsFloat() ? c.ToFloat() : 0;
    }
    else if (bi.Contains("opera")) {
        this.Type = BrowserType.Opera;
        this.Name = "Opera";
        s = bi.IndexOf("version/");
        this.FullVersion = bi.Substring(s + 8);
        v = this.FullVersion.Split(".");
        c = (v[0] + "." + (v[1] !== undefined ? v[1] : "0"));
        this.Version = c.IsFloat() ? c.ToFloat() : 0;
    }
    else if (bi.Contains("android")) {
        this.Type = BrowserType.Android;
        this.Name = "Android";
        s = bi.IndexOf("Android ");
        this.FullVersion = bi.Substring(s + 8, bi.IndexOf(";", s));
        v = this.FullVersion.Split(".");
        c = (v[0] + "." + (v[1] !== undefined ? v[1] : "0"));
        this.Version = c.IsFloat() ? c.ToFloat() : 0;
    }
    else {
        this.Type = BrowserType.Unknown;
        this.Name = "";
        this.FullVersion = "";
        this.Version = -1;
    }
}
//#endregion

//#region Dictionary
function Dictionary(o) {
    this.Owner = o;
    this.Type = Type.Dictionary;
}

Dictionary.FromObject = function (o) {
    var ds = new Dictionary();
    for (var n in o) {
        if (o[n].Type != Type.Function) {
            ds.Add(n, o[n]);
        }
    }

    return ds;
}

Dictionary.FromString = function (s, i, k) {
    var d = new Dictionary();
    s.Split(i).ForEach(function (i) {
        var kv = i.Split(k);
        d.Add(kv[0], kv[1]);
    });

    return d;
};

Dictionary.prototype.Add = function (k, v) {
    this[k] = v;
    return this;
};

Dictionary.prototype.Clear = function () {
    for (var n in this) {
        if (this.hasOwnProperty(n)) {
            delete this[n];
        }
    }
    return this;
};

Dictionary.prototype.Count = function () {
    return this.Values().length;

}

Dictionary.prototype.Copy = function () {
    var d = new Dictionary();
    for (var n in this) {
        if (this.hasOwnProperty(n)) {
            d[n] = this[n];
        }
    }

    return d;
};

Dictionary.prototype.ContainsKey = function (k) {
    return this[k] !== undefined;
};

Dictionary.prototype.ContainsValue = function (v) {
    for (var n in this) {
        if (this[n] == v) {
            return true;
        }
    }
    return false;
};

Dictionary.prototype.ForEach = function (f) {
    if (this.Count() == 0) { return; }
    var k = true, i, e = new IterationEventArgs(), a = this.Keys(), l = a.length;
    e.Sender = this;
    e.Object = new KeyValuePair();
    e.Index = 0;
    for (i = 0; i < l; i++) {
        e.Object.Key = a[i];
        e.Object.Value = this[a[i]];
        e.Index = i;
        k = f(e.Object, e);
        if (e.CancelEvent) { return; }
        if (k === false) { return; }
        if (e.Navigate != 0) {
            i += e.Navigate;
        }
    }
    return this;
};

Dictionary.prototype.GetValue = function (k) {
    if (this[k] === undefined) { return null; }
    return this[k];
};

Dictionary.prototype.Keys = function () {
    var a = [], n;
    for (n in this) {
        if (n == "Owner" || n == "Type" || n == "Inherit" || n == "Extend") { continue; }
        if (this.hasOwnProperty(n)) {
            a.push(n);
        }
    }

    return a;
};

Dictionary.prototype.Remove = function (k) {
    if (this[k] !== undefined) {
        delete this[k];
    }
    return this;
};

Dictionary.prototype.ToString = function (i, v) {
    var s = "", f = true;
    for (var n in this) {
        if (this.hasOwnProperty(n)) {
            if (n !== "Type" && n != "Owner") {
                if (f) {
                    s = n + v + this[n];
                    f = false;
                }
                else {
                    s += i + n + v + this[n];
                }
            }
        }
    }

    return s;
};

Dictionary.prototype.SetValue = function (k, v) {
    if (this[k] === undefined) {
        this.Add(k, v);
    }
    else {
        this[k] = v;
    }
    return this;
};

Dictionary.prototype.Values = function () {
    var v = [];
    for (var n in this) {
        if (this.hasOwnProperty(n) && n != "Owner" && n != "Type") {
            v.push(this[n]);
        }
    }
    return v;
};
//#endregion

//#region Events

function Event(o) {
    var a = [];
    a.Fire = Event.prototype.Fire;
    a.Owner = o;
    a.Type = Type.Event;
    return a;
}

Event.prototype.Fire = function (y) {
    if (this.__Enabled == false) { return true; }
    var o = this.Owner, e = y, l = this.length, f, i;

    if (!e) {
        e = new EventArgs(o);
    }

    var a = [e], r;
    NinJa.Event = e;

    for (i = 0; i < l; i++) {
        f = this[i];
        r = f.apply(o, a);

        if (e.CancelEvent) { return false; }
        if (r === false) { return false; }
    }

    return true;
};

Event.prototype.Enabled = function (e) {
    if (e === undefined) {
        return this.__Enabled;
    }

    this.__Enabled = e;
    return this;
}

function UserEvent(o, t) {
    var a = new ObservableArray(o), b,
        e = o.DOM || o;
    a.Fire = UserEvent.prototype.Fire;
    a.EventType = t;
    a.Type = Type.UserEvent;
    a.__Enabled = true;
    a.Enabled = UserEvent.prototype.Enabled;
    a.OnChange.push(UserEvent.__ch);
    if (!o.__um) {
        o.__um = {};
    }

    o.__um[t] = a;

    b = "on" + t;

    if (e[b] && e[b] != a.Fire) {
        a.push(e[b]);
        a.__o = e.getAttribute(b);
        UserEvent.__ch(new ArrayEventArgs([e[b]], ModificationType.Add, 0, a));
    }

    return a;
}

UserEvent.prototype.Enabled = function (e) {
    if (e === undefined) {
        return this.__Enabled;
    }

    this.__Enabled = e;
    return this;
}

UserEvent.__ch = function (e) {
    var s = e.Sender, o = s.Owner.DOM || s.Owner, b;
    b = "on" + s.EventType;

    if (s.length > 0) {
        if (o[b] != s.Fire) {
            if (b == "onDOMMouseScroll") {
                o.addEventListener("DOMMouseScroll", s.Fire, false);
            }
            else {
                o[b] = s.Fire;
            }
        }
    }
    else if (s.length == 0) {
        if (o[b] != null) {
            if (b == "onDOMMouseScroll") {
                o.removeEventListener("DOMMouseScroll", s.Fire, false);
            }
            else {
                o[b] = null;
            }
        }
    }
}

UserEvent.prototype.Fire = function (e) {
    if (!NinJa.Initiated) { return; }
    var a = e || window.event, b, c, d, f, g;
    var $ = this.Type == undefined ? this.$ : this;

    if ($.Type == Type.UserEvent) {
        if ($.__Enabled == false) {
            return true;
        }

        a = new FauxEvent($.Owner.DOM, $.EventType);
        $ = $.Owner;
    }

    if ($._en === false) {
        if (a.preventDefault) {
            a.preventDefault();
        }

        return false;
    }

    b = $.__um[a.type];


    if (!b) {
        return;
    }

    if (a.type == uvt.clk || a.type == uvt.mdn) {
        if ($._en === false) {
            return;
        }
        if (a.button == 2) {
            return;
        }
    }

    var debug = false;
    switch (a.type) {
        case uvt.kyd:
        case uvt.kyp:
        case uvt.kyu:
            c = new KeyEventArgs(a, $);
            break;

        case uvt.scl:
            c = new ScrollEventArgs(a, $);
            break;

        case uvt.mwl:
            c = new MouseWheelEventArgs(a, $);
            break;

        case uvt.tmv:
            debug = true;

        case uvt.tst:
        case uvt.ten:
            c = new TouchEventArgs(a, $);
            break;

        default:
            c = new UserEventArgs(a, $);
            break;
    }

    NinJa.Event = c;
    d = [c];

    for (f = 0; f < b.length; f++) {
        g = b[f];
        h = g.apply(c.Sender, d);

        a.cancelBubble = c.Handled;
        if (c.Handled) {
            if (a.preventDefault) {
                a.preventDefault(a);
            }
        }

        if (c.NoReturnValue !== true) {
            if (h === false || c.CancelEvent === true || c.Handled) {
                a.returnValue = false;
                return false;
            }
            else {
                a.returnValue = true;
            }
        }
    }

    if (c.NoReturnValue !== true) {
        return a.returnValue;
    }
};

function EventArgs(s, d) {
    this.Sender = s;
    this.CancelEvent = false;
    this.Type = Type.EventArgs;
    this.Data = d;
}

function UserEventArgs(e, s) {
    this.Handled = false;
    this.Sender = s;
    this.RawEvent = e;
    this.CancelEvent = false;
    this.EventType = "";
    this.Type = Type.EventArgs;
    this.NoReturnValue = false;
    this.type = e.type;
    this.target = this.srcElement = s;
    if (this.target.nodeType == 3) { this.target = this.srcElement = this.target.parentNode; }
}

function ExceptionEventArgs(m, u, l) {
    this.CancelEvent = false;
    this.Type = Type.EventArgs;
    this.Message = m;
    this.LineNumber = l;
    this.Location = u;
}

function ArrayEventArgs(o, t, i, s) {
    this.CancelEvent = false;
    this.Sender = s;
    this.Type = Type.EventArgs;
    this.Index = i;
    this.Index2 = 0;
    this.ModificationType = t;
    this.Objects = o;
}

function IterationEventArgs(o, i, s) {
    this.CancelEvent = false;
    this.Sender = s;
    this.Type = Type.EventArgs;
    this.Object = o;
    this.Index = i;
    this.Navigate = 0;
}

function ScrollEventArgs(e, s) {
    this.Handled = false;
    this.Sender = s;
    this.RawEvent = e;
    this.CancelEvent = false;
    this.EventType = "";
    this.Type = Type.EventArgs;
    this.type = e.type;
    this.target = this.srcElement = s;
    if (this.target.nodeType == 3) { this.target = this.srcElement = this.target.parentNode; }

    this.HScrollPosition = s.scrollLeft;
    this.VScrollPosition = s.scrollTop;
}

function MouseWheelEventArgs(e, s) {
    this.Handled = false;
    this.Sender = s;
    this.RawEvent = e;
    this.CancelEvent = false;
    this.EventType = "";
    this.Type = Type.EventArgs;
    this.type = e.type;
    this.target = this.srcElement = s;
    if (this.target.nodeType == 3) { this.target = this.srcElement = this.target.parentNode; }
    if (e.wheelDelta !== undefined) {
        if (e.wheelDelta !== undefined) {
            this.Clicks = e.wheelDelta / -40;
        }
    }
    else {
        this.Clicks = e.detail;

    }
}

function KeyEventArgs(e, s) {
    var $z = ASCII, v = e, c;
    this.Handled = false;
    this.Sender = s;
    this.RawEvent = e;
    this.CancelEvent = false;
    this.EventType = "";
    this.Type = Type.EventArgs;
    this.type = v.type;
    this.target = this.srcElement = s;
    if (this.target.nodeType == 3) { this.target = this.srcElement = this.target.parentNode; }

    this.Character = null;
    if (v.type == "keydown" || v.type == "keyup") {
        this.Key = Keys[v.keyCode];
        c = null;
        if (this.Key >= Keys.A && this.Key <= Keys.Z) {
            c = String.fromCharCode(this.Key).toLowerCase();
            if (!Keyboard.CapsLockLock && v.shiftKey) { c = c.toUpperCase(); }
            else if (Keyboard.CapsLockLock && !v.shiftKey) { c = c.toUpperCase(); }
        }
        else {
            switch (this.Key) {
                case Keys.Zero: c = v.shiftKey ? ")" : "0"; break;
                case Keys.One: c = v.shiftKey ? "!" : "1"; break;
                case Keys.Two: c = v.shiftKey ? "@" : "2"; break;
                case Keys.Three: c = v.shiftKey ? "#" : "3"; break;
                case Keys.Four: c = v.shiftKey ? "$" : "4"; break;
                case Keys.Five: c = v.shiftKey ? "%" : "5"; break;
                case Keys.Six: c = v.shiftKey ? "^" : "6"; break;
                case Keys.Seven: c = v.shiftKey ? "&" : "7"; break;
                case Keys.Eight: c = v.shiftKey ? "*" : "8"; break;
                case Keys.Nine: c = v.shiftKey ? "(" : "9"; break;
                case Keys.NumPadZero: c = "0"; break;
                case Keys.NumPadOne: c = "1"; break;
                case Keys.NumPadTwo: c = "2"; break;
                case Keys.NumPadThree: c = "3"; break;
                case Keys.NumPadFour: c = "4"; break;
                case Keys.NumPadFive: c = "5"; break;
                case Keys.NumPadSix: c = "6"; break;
                case Keys.NumPadSeven: c = "7"; break;
                case Keys.NumPadEight: c = "8"; break;
                case Keys.NumPadNine: c = v.shiftKey ? "(" : "9"; break;
                case Keys.NumPadDivide: c = "/"; break;
                case Keys.NumPadMultiply: c = "*"; break;
                case Keys.NumPadAdd: c = "+"; break;
                case Keys.NumPadMinus: c = "-"; break;
                case Keys.NumPadDecimal: c = "."; break;
                case Keys.Equals: c = v.shiftKey ? "+" : "="; break;
                case Keys.SemiColon: c = v.shiftKey ? ":" : ";"; break;
                case Keys.Minus: c = v.shiftKey ? "_" : "-"; break;
                case Keys.Comma: c = v.shiftKey ? "<" : ","; break;
                case Keys.Period: c = v.shiftKey ? ">" : "."; break;
                case Keys.BackSlash: c = v.shiftKey ? "?" : "/"; break;
                case Keys.Tilde: c = v.shiftKey ? "~" : "`"; break;
                case Keys.OpenSquareBracket: c = v.shiftKey ? "{" : "["; break;
                case Keys.ForwardSlash: c = v.shiftKey ? "|" : "\\"; break;
                case Keys.CloseSquareBracket: c = v.shiftKey ? "}" : "]"; break;
                case Keys.Apostrophe: c = v.shiftKey ? "\"" : "'"; break;
                case Keys.Spacebar: c = " "; break;
                default: c = null;
            }
        }
    }
    else {
        if (e.which) {
            if ($z[e.which]) {
                c = String.fromCharCode(e.which);
            }
            this.Key = $z[e.which];
        }
        else {
            if ($z[e.which]) {
                c = String.fromCharCode(e.keyCode);
            }
            this.Key = $z[e.keyCode];
        }
    }

    this.Character = c;
    this.Modifiers = 0;
    this.Modifiers += v.shiftKey ? Modifiers.ShiftKey : Modifiers.None;
    this.Modifiers += v.altKey ? Modifiers.AltKey : Modifiers.None;
    this.Modifiers += v.ctrlKey ? Modifiers.ControlKey : Modifiers.None;
}

function FauxEvent(t, y) {
    this.type = y;
    this.target = this.srcElement = t;
    if (this.target.nodeType == 3) { this.target = this.srcElement = this.target.parentNode; }
    this.Type = Type.FauxEvent;
}

function TouchEventArgs(e, s) {
    this.Handled = false;
    this.Sender = s;
    this.RawEvent = e;
    this.CancelEvent = false;
    this.EventType = "";

    var a = e.touches, l = a.length, i;
    this.TouchStates = [];
    for (i = 0; i < l; i++) {
        this.TouchStates.Add(new TouchState(a[i]));
    }
}

function SwipeEventArgs(x, y, s) {
    this.Handled = false;
    this.Sender = s;
    this.RawEvent = e;
    this.CancelEvent = false;
    this.EventType = "";
    this.XChange = x;
    this.YChange = y;
}

function TouchState(e) {
    this.X = e.clientX;
    this.Y = e.clientY;
}
//#endregion

//#region DateTime object

function DateTime(y, m, d) {
    if (arguments.length > 0) {
        this.Object = null;
        if (y === undefined) {
            y = 1900;
            d = 1;
            m = 1;
        }


        switch (y.Type) {
            case Type.Date:
                this.Object = y;
                break;

            case Type.String:
                this.Object = new Date(y);
                break;

            case Type.Number:
                if (m != undefined) {
                    if (y < 20) { y += 2000; }
                    this.Object = new Date(y, m - 1, d);
                }
                else {
                    this.Object = new Date(y);
                }
                break;
        }
    }

    this.Type = Type.DateTime;
};

DateTime.Compare = function (a, b) {
    var o = a.Object, p = b.Object;
    return ((o < p) ? -1 : ((o > p) ? 1 : 0));
};

DateTime.Now = function () {
    return new DateTime(new Date());
};

DateTime.Null = new DateTime(1900, 1, 1);

DateTime._TimezoneOffset = null;
DateTime.TimezoneOffset = function () {
    if (DateTime._TimezoneOffset === null) {
        var a = new Date().getTimezoneOffset();
        var j = new Date(1970, 0, 1);
        DateTime._TimezoneOffset = (a + (j.getTimezoneOffset() - a)) * -1;
    }

    return DateTime._TimezoneOffset;
}

DateTime.ServerTimezoneOffset = 0;

DateTime.prototype.toJSON = function () {
    return this.Add(new TimeSpan(0, DateTime.TimezoneOffset() - DateTime.ServerTimezoneOffset)).Value().toJSON();
}

DateTime.prototype.Add = function (v) {
    var r = new Date();
    r.setTime(this.Value().getTime() + v.ToMilliseconds());
    return new DateTime().Value(r);
};

DateTime.prototype.Compare = function (b) {
    var o = this.Object, p = b.Object;
    return ((o < p) ? -1 : ((o > p) ? 1 : 0));
}

DateTime.prototype.Date = function (v) {
    if (v === undefined) {
        return this.Object.getDate();
    }
    if (v > 0 && v <= d.Months.GetDays(this.Month(), this.Year())) {
        this.Object.setDate(v);
    }
    else {
        throw ("Date out of range.");
    }

    return this;
};

DateTime.prototype.DayOfWeek = function () {
    return this.Object.getDay();
};

DateTime.prototype.GetDate = function () {
    return new DateTime(this.Year(), this.Month(), this.Date());
}

DateTime.prototype.GetTime = function () {
    return new TimeSpan(this.Hour(), this.Minute(), this.Second());
}

DateTime.prototype.Hour = function (v) {
    if (v === undefined) {
        return this.Object.getHours();
    }
    if (v >= 0 && v <= 23) {
        this.Object.setHours(v);
    }
    else {
        throw ("Hour out of range.");
    }

    return this;
};

DateTime.prototype.Minute = function (v) {
    if (v === undefined) {
        return this.Object.getMinutes();
    }
    if (v >= 0 && v <= 59) {
        this.Object.setMinutes(v);
    }
    else {
        throw ("Minute out of range.");
    }

    return this;
};

DateTime.prototype.Month = function (v) {
    if (v === undefined) {
        return this.Object.getMonth() + 1;
    }
    if (v > 0 && v < 13) {
        this.Object.setMonth(v - 1);
    }
    else {
        throw ("Month out of range.");
    }
    return this;
};

DateTime.prototype.Second = function (v) {
    if (v === undefined) {
        return this.Object.getSeconds();
    }
    if (v >= 0 && v <= 59) {
        this.Object.setSeconds(v);
    }
    else {
        throw ("Second out of range.");
    }

    return this;
};

DateTime.prototype.Subtract = function (v) {
    var r = new Date();
    r.setTime(this.Ticks() - v.ToMilliseconds());
    return new DateTime().Value(r);
};

DateTime.prototype.Ticks = function (v) {
    if (v === undefined) {
        return this.Object.getTime();
    }

    this.Object.setTime(v);
    return this;
};

DateTime.prototype.ToGMTString = function () {
    return this.Object.toGMTString();
};

DateTime.prototype.toString =
DateTime.prototype.ToString = function (w) {
    var d = this;
    var amPM = d.Hour() > 12 ? "PM" : "AM";
    var h = d.Hour() % 12, m = d.Minute(), s = d.Second();

    if (h == 0) { h = 12; }
    if (w) { return d.Month() + "/" + d.Date() + "/" + d.Year() + " " + h + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + " " + amPM; }
    else {
        var s = d.Month() + "/" + d.Date() + "/" + d.Year();
        if (s == "1/1/1900") return "";
        return s;
    }
};

DateTime.prototype.ToLongString = function () {
    return this.ToString(true);
};

DateTime.prototype.Equals = function (d) {
    if (d.Type === Type.Date || d.Type === Type.DateTime) {
        return this.Compare(d) == 0;
    }

    return false;
};

DateTime.prototype.Year = function (v) {
    if (v === undefined) {
        return this.Object.getFullYear();
    }
    this.Object.setFullYear(v);
    return this;
};

DateTime.prototype.Value = function (d) {
    if (d === undefined) {
        return this.Object;
    }

    this.Object = d;
    return this;
};

DateTime.Months = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
    GetName: function (m) {
        switch (m) {
            case 1: return "January";
            case 2: return "February";
            case 3: return "March";
            case 4: return "April";
            case 5: return "May";
            case 6: return "June";
            case 7: return "July";
            case 8: return "August";
            case 9: return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
            default:
                return "Invalid";
        }
    },

    GetDays: function (m, y) {
        switch (m) {
            case 1: return 31;
            case 2: return (y % 4 === 0 ? 29 : 28);
            case 3: return 31;
            case 4: return 30;
            case 5: return 31;
            case 6: return 30;
            case 7: return 31;
            case 8: return 31;
            case 9: return 30;
            case 10: return 31;
            case 11: return 30;
            case 12: return 31;
            default:
                return "Invalid";
        }
    }
};

DateTime.Days = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    GetName: function (v) {
        switch (v) {
            case 0: return "Sunday";
            case 1: return "Monday";
            case 2: return "Tuesday";
            case 3: return "Wednesday";
            case 4: return "Thursday";
            case 5: return "Friday";
            case 6: return "Saturday";
        }
    }
};

function Time(h, m, s, p) {
    if (h.Type == Type.String) {
    }

    this.Hour = h;
    this.Minute = m;
    this.Second = s.Type == Type.Number ? s : 0;
    this.Period = p || Period.AM;
}

Time.prototype.ToString = function () {
    return this.Hour + ":" + this.Minute + ":" + this.Second + " " + (this.Period === 0 ? "AM" : "PM");
}
//#endregion

//#region TimeSpan
function TimeSpan(h, m, s, l) {
    if (h < 0) { throw ("Invalid time"); }
    this.Days = 0;
    this.Hours = 0;
    this.Milliseconds = 0;
    this.Minutes = 0;
    this.Seconds = 0;
    this.Type = Type.TimeSpan;

    if (arguments.length == 1) {
        this.Milliseconds = h;
        return;
    }

    this.Hours = h;
    if (m !== undefined) {
        this.Hours += parseInt(m / 60, 10);
        this.Minutes = m % 60;
    }
    if (s !== undefined) {
        this.Minutes += parseInt(s / 60, 10);
        this.Hours += parseInt(this.Minutes / 60, 10);
        this.Minutes = parseInt(this.Minutes % 60, 10);
        this.Seconds = s % 60;
    }
    if (l !== undefined) {
        this.Seconds += parseInt(l / 1000, 10);
        this.Minutes += parseInt(this.Seconds / 60, 10);
        this.Hours += parseInt(this.Minutes / 6, 10);
        this.Seconds = this.Seconds % 60;
        this.Minutes = this.Minutes % 60;
        this.Milliseconds = l % 1000;
    }

    this.Days = parseInt(this.Hours / 24, 10);
    this.Hours = this.Hours % 24;

}

TimeSpan.FromDays = function (d) {
    return new TimeSpan(d * 24, 0, 0, 0);
};

TimeSpan.FromHours = function (h) {
    return new TimeSpan(h, 0, 0, 0);
};

TimeSpan.FromMilliseconds = function (m) {
    return new TimeSpan(m);
};

TimeSpan.FromMinutes = function (m) {
    return new TimeSpan(0, m, 0, 0);
};

TimeSpan.FromSeconds = function (s) {
    return new TimeSpan(0, 0, s, 0);
};

TimeSpan.prototype.Add = function (h, m, s, l) {
    var t;
    if (h.Type != "TimeSpan") {
        t = new TimeSpan(h, m, s, l);
    }
    else {
        t = h;
    }

    return new TimeSpan(0, 0, 0, this.ToMilliseconds() + t2.ToMilliseconds());
};

TimeSpan.prototype.Subtract = function (h, m, s, l) {
    var t;
    if (h.Type == Type.Timespan) {
        t = new TimeSpan(h, m, s, l);
    }
    else {
        t = hours;
    }
    return new TimeSpan(0, 0, 0, this.ToMilliseconds() + t2.ToMilliseconds());
};

TimeSpan.prototype.ToMilliseconds = function () {
    var t = 0;
    t += this.Milliseconds;
    t += this.Seconds * 1000;
    t += this.Minutes * 60000;
    t += this.Hours * 3600000;
    t += this.Days * 86400000;

    return t;
};

TimeSpan.prototype.ToString = function () {
    return (this.Hours < 10 ? "0" + this.Hours : this.Hours) + ":" + (this.Minutes < 10 ? "0" + this.Minutes : this.Minutes) + ":" + (this.Seconds < 10 ? "0" + this.Seconds : this.Seconds);
};
//#endregion

//#region Timer
function Timer(t, l) {
    if (t.Type == Type.TimeSpan) {
        this.TriggerMilliseconds = t.ToMilliseconds() || 1;
    }
    else {
        this.TriggerMilliseconds = t || 1;
    }

    this.__lo = l;
    this.TimerID = Timer.Manager.TimerCount++;
    this.OnTrigger = new Event(this);
    this.TimeoutObject = null;
    this.Type = Type.Timer;
    this.Tag = null;
    this.Running = false;
    Timer.Manager[this.TimerID] = this;
}

Timer.Delay = function (r, f) {
    var t = new Timer(r);
    t.OnTrigger.push(f);
    t.Start();
    return t;
};

Timer.Manager = {};
Timer.Manager.TimerCount = 0;

Timer.prototype.Start = function () {
    var t = this;
    t.Running = true;
    t.TimeoutObject = this.__lo ? setInterval(Trigger, t.TriggerMilliseconds) : setTimeout(Trigger, t.TriggerMilliseconds);
    function Trigger() {
        if (t.Running) {
            if (t.OnTrigger.length > 0) {
                t.OnTrigger.Fire(new EventArgs(t));
            }
        }
    }
};


Timer.prototype.Stop = function () {
    this.Running = false;
    this.__lo ? clearInterval(this.TimeoutObject) : clearTimeout(this.TimeoutObject);
};

Timer.prototype.Reset = function () {
    this.Stop();
    this.Start();
};
//#endregion

//#region Cookie
function Cookie(n, v, t) {
    this._na = n;
    this._va = v;
    if (t) {
        switch (t.Type) {
            case Type.d:
                this.__ex = t;
                break;

            case Type.TimeSpan:
                this.__ex = d.Now().Add(t);
                break;
        }
    }
    else {
        this.__ex = null;
    }

    this.Raw = "";
}

Cookie.SafeLimit = 4096;


Cookie.prototype.Name = function (n) {
    if (n === undefined) {
        return this._na;
    }
    if (Client.Cookies[this._na]) {
        this.__de();
        this._na = n;
        this.__sv();
    }
    else {
        this._na = n;
    }

    return this;
};


Cookie.prototype.Expires = function (d) {
    if (d != null) {
        switch (d.Type) {
            case Type.d:
                this.__ex = d;
                break;

            case Type.TimeSpan:
                this.__ex = d.Now().Add(d);
                break;
        }
    }
    else {
        this.__ex = null;
    }

    if (Client.Cookies[this._na]) {
        this.__sv();
    }
    return this;
};

Cookie.prototype.Value = function (v) {
    if (v === undefined) {
        return this._va;
    }

    this._va = v;
    if (Client.Cookies[this._na]) {
        this.__sv();
    }

    return this;
};

Cookie.prototype.__ld = function (s) {
    this.Raw = s + ";";
    s = s.Split("=");
    this._na = s[0].Replace("$;", ";").TrimLeft();
    if (s[1]) {
        this._va = s[1].Replace("$;", ";");
    }
}

Cookie.prototype.__de = function () {
    delete Client.Cookies[this._na];
    document.cookie = String.Format("{0}=;{1}", [escape(this._na), "expires=Thu, 01-Jan-1970 00:00:01 GMT"]);
}

Cookie.prototype.__sv = function () {
    var r = this.Raw;
    this.Raw = String.Format("{0}={1};{2}", [this._na.Replace(";", "$;"), this._va !== undefined ? this._va.toString().Replace(";", "$;") : "", this.__ex ? "expires=" + this.__ex.ToGMTString() : ""]);
    if (Client.CheckCookieSize() >= Cookie.SafeLimit) {
        alert("Saving the cookie '" + this._na + "' exceeds the safe cookie limit. Saving failed.");
        this.Raw = r;
        return;
    }
    document.cookie = this.Raw;
    this.Raw += "; ";
}
//#endregion

//#region Color
function Color(r, g, b, a) {
    var s, l;
    this.Type = Type.Color;

    if (r.Type == Type.String) {
        l = r.ToLower();

        if (Colors[l] !== undefined) {
            r = Colors[l];
        }

        if (r.Contains("rgb(")) {
            a = r.Substring(4, r.IndexOf(")")).Split(",");
            r = parseInt(a[0], 10);
            g = parseInt(a[1], 10);
            b = parseInt(a[2], 10);
            a = 0;
        }
        else if (r.Contains("rgba(")) {
            a = r.Substring(5, r.IndexOf(")")).Split(",");
            r = parseInt(a[0], 10);
            g = parseInt(a[1], 10);
            b = parseInt(a[2], 10);
            a = parseInt(a[3], 10);
        }
        else {
            s = r.Remove("#");
            r = s.Substring(0, 2).ToInt(16);
            g = s.Substring(2, 4).ToInt(16);
            b = s.Substring(4, 6).ToInt(16);
            if (r.length > 7) {
                a = 255 / s.Substring(6, 8).ToInt(16);
            }
        }
    }

    this.Red = r < 0 ? 0 : (r > 255 ? 255 : r);
    this.Green = g < 0 ? 0 : (g > 255 ? 255 : g);
    this.Blue = b < 0 ? 0 : (b > 255 ? 255 : b);
    this.Alpha = a;
}

Color.FromPredefined = function (n) {
    return new Color(n);
}

Color.prototype.Mix = function (c, p) {
    var e = 1 - p;
    return new Color(e * this.Red + p * c.Red,
                    e * this.Blue + p * c.Blue,
                    e * this.Green + p * c.Green,
                    e * this.Alpha + p * c.Alpha);
}

Color.FromRGB = function (r, g, b) {
    return new Color(r, g, b);
}

Color.FromRGBA = function (r, g, b, a) {
    return new Color(r, g, b, a);
}

Color.prototype.toString = Color.prototype.ToString = function () {
    if (this.Alpha > 0) {
        return String.Format("#{0}{1}{2}{3}", [parseInt(this.Red).ToString(16, 2), parseInt(this.Green).ToString(16, 2), parseInt(this.Blue).ToString(16, 2), parseInt(255 / this.Alpha).ToString(16, 2)]).toUpperCase();
    }

    return String.Format("#{0}{1}{2}", [parseInt(this.Red).ToString(16, 2), parseInt(this.Green).ToString(16, 2), parseInt(this.Blue).ToString(16, 2)]).toUpperCase();
}
//#endregion

//#region Reference functions
var $Array = $ArrayEventArgs = $Boolean = $Color = $Cookie = $Date = $DateTime = $Delegate = $Dictionary = $Event = $EventArgs = $IterationEventArgs = $KeyEventArgs = $Number = $ScrollEventArgs = $String = $TimeSpan = $Timer = $TouchEventArgs = $TouchState = $UserEvent = $UserEventArgs = function (object) {
    return object;
}

function $RadioButtonGroup(n) {
    return NinJa.__RBG[n];
};

function $Window(w) {
    return w;
}
//#endregion

//#region Element
function Element(e, t) {
    if (e === null) { return; }
    var $ = this;
    if (e !== undefined && e.Type == Type.String) {
        e = NinJa.CreateElement(e, t);
    }

    if (e.addEventListener) {
        e.addEventListener("mouseout", Element.__mt, true);
        e.addEventListener("mouseover", Element.__mv, true);
    }
    else {
        e.onmouseout = Element.__mt;
        e.onmouseover = Element.__mv;
    }

    $.DOM = e;
    $.__op = 1;
    $._en = true;
    $.Classes = new ClassArray($);
    $.IsMouseOver = false;
    $.OnClick = new UserEvent($, uvt.clk);
    $.OnDoubleClick = new UserEvent($, uvt.dbc);
    $.OnMouseOut = new UserEvent($, uvt.mou);
    $.OnMouseOver = new UserEvent($, uvt.mov);
    $.OnMouseMove = new UserEvent($, uvt.mv);
    $.OnMouseDown = new UserEvent($, uvt.mdn);
    $.OnMouseUp = new UserEvent($, uvt.mup);
    $.OnKeyDown = new UserEvent($, uvt.kyd);
    $.OnKeyUp = new UserEvent($, uvt.kyu);
    $.OnKeyPress = new UserEvent($, uvt.kyp);
    $.OnContextMenu = new UserEvent($, uvt.ctx);
    $.OnMouseWheel = new UserEvent($, uvt.mwl);
    $.OnEnterKey = new Event($);
    $.OnKeyDown.Add(Element.__OnKeyEnter);
    $.OnTouchStart = new UserEvent($, uvt.tst);
    $.OnTouchEnd = new UserEvent($, uvt.ten);
    $.OnTouchMove = new UserEvent($, uvt.tmv);
    $.NaturalDisplay = $.Style("display");

    if (NinJa.TouchStartAsOnClick == true) {
        $.OnTouchStart.AddRange($.OnClick);
        $.OnClick = $.OnTouchStart;
    }

    $.NaturalDisplay = $.NaturalDisplay == "none" ? undefined : $.NaturalDisplay;
    e.$ = $;

    e.$ap = e.appendChild;
    e.$ib = e.insertBefore;
    e.$rc = e.removeChild;
    $.__ea = e.getAttribute("enteractivates") || "";

    if ($.__ea) {
        $.OnEnterKey.push(Element.__Activates);
    }
}

Element.__Activates = function (e) {
    if (e.Sender.__ea) {
        $Input(e.Sender.__ea).Click();
    }
};

Element.__OnKeyEnter = function (k) {
    if (k.Key == Keys.Enter) {
        if (k.Sender.OnEnterKey.length > 0) {
            k.Sender.OnEnterKey.Fire();
            k.Handled = true;
        }
    }
};

Element.__mv = function () {
    var e = this.$ || this
    e.IsMouseOver = true;
};

Element.__mt = function (e) {
    e = this.$ || this
    e.IsMouseOver = false;
};

Element.__ob = function (e) {
    e = this.$ || this
    e.IsFocused = false;
};

Element.__of = function (e) {
    e = this.$ || this
    e.IsFocused = true;
};

Element.prototype.Attribute = function (a, v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.getAttribute(a);
    }

    e.setAttribute(a, v);
    return this;
};

Element.prototype.BackgroundColor = function (v) {
    return this.Style("backgroundColor", v);
};

Element.prototype.ElementsByClassName = function (c) {
    var e = this.DOM, a = [], b, i, l, v;
    b = e.querySelectorAll("." + c);
    l = b.length;
    for (i = 0; i < l; i++) {
        v = b[i];
        a.push(v.$ || new Element(v));
    }

    return a;
};

Element.prototype.ElementsByTagName = function (t) {
    var e = this.DOM, a = [], b, i, l, v;
    b = e.querySelectorAll(t.toLowerCase());
    l = b.length;
    for (i = 0; i < l; i++) {
        v = b[i];
        a.push(v.$ || v);
    }

    return a;
};

Element.prototype.Enabled = function (v) {
    if (v === undefined) {
        return this._en;
    }

    var p = this.DOM.parentNode, c = this.DOM.getElementsByTagName("*"), l = c.length, u, i;
    while (p) {
        if (p.$) {
            if (p.$._en === false) {
                return;
            }
        }

        p = p.parentNode;
    }
    this.Opacity(v ? 1 : .7);

    this._en = v;

    for (i = 0; i < l; i++) {
        u = c[i].$;
        if (u && u.Enabled) {
            u.Enabled(v);
        }
    }

    return this;
};

Element.prototype.Bold = function (v) {
    if (v === undefined) {
        return this.Style("font-weight") == "bold" || this.Style("font-weight") == "700";
    }

    return this.Style("font-weight", v ? "bold" : "");
};

Element.prototype.ClassName = function (c) {
    if (c === undefined) {
        return this.DOM.className;
    }
    this.Classes.BeginUpdate().Clear().AddRange(c.Split(" ")).EndUpdate();
    return this;
};

Element.prototype.ClearTextNodes = function () {
    var e = this.DOM,
        c = Array.From(e.childNodes),
        l = c.length,
        v,
        i;
    for (i = 0; i < l; i++) {
        v = c[i];
        if (v.nodeName == "#text") {
            e.removeChild(v);
        }
    }

    return this;
}

Element.prototype.Collapsed = function (v) {
    if (v === undefined) {
        return this.Style("display") == "none";
    }

    this.DOM.style.display = v ? "none" : (this.NaturalDisplay || "");
    if (v === false) {
        var a = Array.From(this.DOM.querySelectorAll("*[refreshrequired]")), l = a.length, i;
        for (i = 0; i < l; i++) {
            a[i].$.RefreshDisplay();
        }
    }
    return this;
};

Element.prototype.Cursor = function (v) {
    var e = this.DOM;
    if (v !== undefined) {
        e.style.cursor = v;
        return this;
    }

    return e.style.cursor;
};

Element.prototype.Displayed = function () {
    var e = this.DOM;
    if (e.offsetWidth && e.offsetHeight) {
        return !this.Collapsed() || this.Visible();
    }

    return false;
}

Element.prototype.ForegroundColor = function (v) {
    return this.Style("color", v);
};

Element.prototype.Height = function (h) {
    if (h === undefined) {
        return this.DOM.clientHeight;
    }

    if (h.Type == Type.String) {
        this.Style("height", h);
    }
    else {
        h = h < 0 ? 0 : h;
        this.Style("height", h + "px");
    }

    return this;
};

Element.prototype.ID = function (v) {
    if (v === undefined) {
        return this.DOM.id
    }

    this.DOM.id = v;
    return this;
};

Element.prototype.Italic = function (v) {
    if (v === undefined) {
        return this.Style("font-style") == "italic";
    }

    this.Style("font-style", v ? "italic" : "");
    return this;
};

Element.prototype.LayoutHeight = function () {
    return this.DOM.offsetHeight;
};

Element.prototype.LayoutWidth = function () {
    return this.DOM.offsetWidth;
};

Element.prototype.Opacity = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return this.__op;
    }

    if (e.style.opacity !== undefined) {
        e.style.opacity = v;
    }
    else {
        if (!e.filters || !e.filters["DXImageTransform.Microsoft.Alpha"]) {
            e.setAttribute("style", e.getAttribute("style") + "; filter: progid:DXImageTransform.Microsoft.Alpha(opacity=" + v * 100 + ")");
        }
        else {

            if (v >= 1) {
                e.filters["DXImageTransform.Microsoft.Alpha"].enabled = false;
            }
            else {
                e.filters["DXImageTransform.Microsoft.Alpha"].enabled = true;
            }

            e.filters["DXImageTransform.Microsoft.Alpha"].opacity = v * 100;
        }
    }

    this.__op = v;
    return this;
};

Element.prototype.Parent = function () {
    var p = this.DOM.parentNode;
    if (!NullOrUndefined(p)) {
        if (p.$ === undefined) {
            Content.New(p);
        }
        return p.$;
    }

    return null;
};

Element.prototype.Position = function (p) {
    if (p === undefined) {
        return this.Style("position");
    }

    this.Style("position", p);
    return this;
};

Element.prototype.Style = function (a, b) {
    var e = this.DOM;
    var i, v, s;
    if (a.Contains("-")) {
        s = a.toLowerCase().Split("-");
        a = s[0];
        for (i = 1; i < s.length; i++) {
            s[i] = s[i][0].toUpperCase() + s[i].Substring(1);
            a += s[i];
        }
    }

    if (b !== undefined) {
        if (b.Type == Type.Color) {
            b = b.toString();
        }

        if (a == Style.Float) {
            e.setAttribute("style", e.getAttribute("style") + "; float: " + b);
            return this;
        }

        e.style[a] = b;
        return this;
    }

    if (e.style[a]) {
        v = e.style[a];
    }
    else if (e.currentStyle) {
        v = e.currentStyle[a];
    }
    else if (document.defaultView) {
        v = document.defaultView.getComputedStyle(e, null)[a];
    }

    if (v) {
        if (v.Contains("px")) {
            if (v.Remove("px").IsFloat()) {
                return v.Remove("px").ToFloat();
            }
        }
        else if (v.Contains("#") || v.Contains("rgb(")) {
            return new Color(v);
        }
    }
    return v;
};

Element.prototype.Toggle = function (p, v) {
    var i;
    p = p || "Collapsed";
    if (!v) { v = [true, false]; };
    if (this[p]) {
        i = v.IndexOf(this[p]());
        i++;
        if (i == v.length) {
            i = 0;
        }
        this[p](v[i]);
    }

    return this;
}

Element.prototype.ToolTip = function (t) {
    var e = this.DOM;
    if (t === undefined) {
        return e.title;
    }

    e.title = t;
    return this;
};

Element.prototype.Visible = function (v) {
    if (v === undefined) {
        return this.Style("visibility") != "hidden";
    }

    if (v) {
        this.Style("visibility", "visible");
    }
    else {
        this.Style("visibility", "hidden");
    }

    return this;
};

Element.prototype.Width = function (w) {
    if (w === undefined) {
        return this.DOM.clientWidth;
    }

    if (w.Type == Type.String) {
        this.Style("width", w);
    }
    else {
        w = w < 0 ? 0 : w;
        this.Style("width", w + "px");
    }

    return this;
};

Element.prototype.X = function (x) {
    var e = this.DOM, d;
    if (x === undefined) {
        x = 0;
        d = e.style.position;
        if (d == "float" || d == "relative" || d == "absolute") {
            return e.style.left.Remove("px").ToInt();
        }

        var p = e;

        while (p) {
            x += p.offsetLeft;

            if (!p.offsetParent && p.currentStyle && p.currentStyle.position == "fixed") {
                p = p.parentNode;
            }
            else {
                p = p.offsetParent;
            }
        }
        return x;
    }

    if (x.Type == Type.Number) {
        this.Style("left", x + "px");
    }
    else {
        this.Style("left", x);
    }
    return this;
};

Element.prototype.Y = function (y) {
    var e = this.DOM, d;
    if (y === undefined) {
        y = 0;
        d = e.style.position;
        if (d == "float" || d == "relative" || d == "absolute") {
            return e.style.top.Remove("px").ToInt();
        }
        var p = e;
        while (p) {
            y += p.offsetTop;
            if (!p.offsetParent && p.currentStyle && p.currentStyle.position == "fixed") {
                p = p.parentNode;
            }
            else {
                p = p.offsetParent;
            }
        }
        return y;
    }

    if (y.Type == Type.Number) {
        this.Style("top", y + "px");
    }
    else {
        this.Style("top", y);
    }
    return this;
};

Element.prototype.Underline = function (v) {
    if (v === undefined) {
        return this.Style("text-decoration") == "underline";
    }

    this.Style("text-decoration", v ? "underline" : "none");
    return this;
}
//#endregion

//#region Form
function Form(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("form", e);
    }
    var $ = this;
    this.DOM = e;

    e.$ = $;
    e.$ap = e.appendChild;
    e.$ib = e.insertBefore;
    e.$rc = e.removeChild;
    $.OnSubmit = new UserEvent($, uvt.sbm);
    $.Type = Type.Form;
}

Form.prototype.Action = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.action;
    }

    e.action = v;
    return this;
};

Form.prototype.Encoding = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.encoding;
    }

    e.encoding = v;
    return this;
};

Form.prototype.Method = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.method;
    }

    e.method = v;
    return this;
};

Form.prototype.Reset = function () {
    this.DOM.reset();
    return this;
};

Form.prototype.Target = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.target;
    }

    e.target = v;
    return this;
};

Form.prototype.Submit = function () {
    var e = this.DOM;
    if (this.OnSubmit.length > 0) {
        this.OnSubmit.Fire();
    }
    e.submit();
    return this;
};
//#endregion

//#region Content
function Content(e, t) {
    if (e === null) { return; }
    var $ = this;
    if (e.Type === Type.String) {
        $ = new Element(e, t);
        e = $.DOM;
        Content.Extend($);
    }

    $.__bp = e.getAttribute("bindfield");

    Element.Inherit($, e);
    if (e !== document.body) {
        $.OnScroll = new UserEvent($, uvt.scl);
    }
    return $;
}

Content.prototype = new Element(null);
Content.prototype.constructor = Content;
Content.prototype.AddElement =
Form.prototype.AddElement = function (x) {
    var e = this.DOM;
    x = x.DOM || x;
    if (x.Type == Type.String) {
        e.$ap(document.createTextNode(x));
        return;
    }
    else {
        e.$ap(x);
    }
    return this;
};

Content.prototype.AddElements =
Form.prototype.AddElements = function (x) {
    var l = x.length,
        v,
        i,
        e = this.DOM;

    for (i = 0; i < l; i++) {
        v = x[i];
        v = v.DOM || v;
        if (v.Type == Type.String) {
            e.$ap(document.createTextNode(v));

        }
        else {
            e.$ap(v);
        }
    }
    return this;
};

Content.prototype.BindField = function (v) {
    if (v === undefined) {
        return this.__bp;
    }

    this.__bp = va;
    e.setAttribute("bindfield", va);
    return this;
}

Content.prototype.ClearContent = function () {
    var e = this.DOM;
    if (e.innerHTML !== undefined) {
        e.innerHTML = "";
    }
    else {
        e.innerText = "";
    }

    return this;
};

Content.prototype.Content = function (c) {
    var e = this.DOM;
    if (c === undefined) {
        if (e.innerHTML !== undefined) {
            return e.innerHTML;
        }
        else {
            return e.innerText;
        }
    }

    try {
        e.innerHTML = c;
    }

    catch (x) {
        e.innerText = c;
    }

    return this;
};

Content.prototype.HorizontalScrollPosition = function (x) {
    var e = this.DOM;
    if (x === undefined) {
        return e.scrollLeft;
    }

    e.scrollLeft = x;
    return this;
};

Content.prototype.HorizontalScrollToElement = function (x) {
    var e = this.DOM;
    x = x.DOM || x;
    if (e.style.position == "absolute") {
        if (e.scrollLeft > x.offsetLeft) {
            e.scrollLeft = x.offsetLeft;
        }
        else {
            e.scrollLeft = x.offsetLeft + x.offsetWidth - e.offsetWidth
        }
    }
    else {
        if (e.scrollLeft > x.offsetLeft) {
            e.scrollLeft = x.offsetLeft - x.parentNode.offsetLeft + x.offsetWidth - e.offsetLeft;
        }
        else {
            e.scrollLeft = x.offsetLeft - x.parentNode.offsetLeft;
        }
    }
    return this;
};

Content.prototype.IndexOfElement = function (x) {
    var e = this.DOM;
    x = x.DOM || x;
    return Array.From(e.childNodes).IndexOf(x);
}

Content.prototype.InsertElement =
Form.prototype.InsertElement = function (i, x) {
    var e = this.DOM;
    x = x.DOM || x;
    if (x.Type == Type.String) {
        e.$ib(document.createTextNode(x), e.children[i]);
        return;
    }
    else {
        if (e.childNodes.length <= i) {
            e.$ap(x);
        }
        else {
            e.$ib(x, e.childNodes[i]);
        }
    }

    return this;
};

Content.prototype.InsertElements =
Form.prototype.InsertElements = function (n, x) {
    var v,
        l = x.length,
        i,
        e = this.DOM;
    for (i = 0; i < l; i++) {
        v = x[i];
        v = v.DOM || v;
        if (v.Type == Type.String) {
            e.$ib(document.createTextNode(v), e.children[n]);
            continue;
        }
        else {
            if (e.childNodes.length <= n) {
                e.$ap(v);
            }
            else {
                e.$ib(v, e.childNodes[n]);
            }
        }
    }

    return this;
};

Content.prototype.InsertElementAfter =
Form.prototype.InsertElementAfter = function (x, y) {
    var e = this.DOM;
    x = x.DOM || x;
    y = y.DOM || y;
    if (x.Type == Type.String) {
        e.$ib(document.createTextNode(x), y.nextSibling);
        return;
    }
    else {
        e.$ib(x, y.nextSibling);
    }

    return this;
};

Content.prototype.InsertElementBefore =
Form.prototype.InsertElementBefore = function (x, y) {
    var e = this.DOM;
    x = x.DOM || x;
    y = y.DOM || y;
    if (x.Type == Type.String) {
        e.$ib(document.createTextNode(x), y);
        return;
    }
    else {
        e.$ib(x, y);
    }

    return this;
};

Content.prototype.MoveTo = function (x) {
    var e = this.DOM;
    x = x.DOM || x;
    while (e.children.length > 0) {
        x.$ap(e.$rc(e.children[0]));
    }

    return this;
};

Content.prototype.RemoveElement =
Form.prototype.RemoveElement = function (x) {
    x = x.DOM || x;
    this.DOM.$rc(x);
    return this;
};

Content.prototype.RemoveElementAt =
Form.prototype.RemoveElementAt = function (x) {
    var a = this.DOM.childNodes[x];
    this.DOM.$rc(a);
    return a;
};

Content.prototype.RemoveElements =
Form.prototype.RemoveElements = function (x) {
    var e = this.DOM,
        l = x.length,
        i,
        v;

    for (i = 0; i < l; i++) {
        v = x[i];
        v = v.DOM || v;
        e.$rc(v);
    }

    return this;
};

Content.prototype.SwapElements =
Form.prototype.SwapElements = function (x, y) {
    var p = document.createTextNode("test");
    this.InsertElementBefore(p, x);
    this.RemoveElement(x);
    this.InsertElementBefore(x, y);
    this.RemoveElement(y);
    this.InsertElementBefore(y, p);
    this.RemoveElement(p);
    delete p;
};

Content.prototype.Text = function (c) {
    var e = this.DOM;
    if (c === undefined) {
        if (e.textContent !== undefined) {
            return e.textContent;
        }
        else {
            return e.innerText;
        }
    }

    if (NullOrUndefined(c)) {
        c = "";
    }
    if (e.textContent !== undefined) {
        e.textContent = c;
    }
    else {
        e.innerText = c;
    }

    return this;
};
Content.prototype.VerticalScrollPosition = function (y) {
    var e = this.DOM;
    if (y === undefined) {
        return e.scrollTop;
    }

    e.scrollTop = y;
    return this;
};

Content.prototype.VerticalScrollToElement = function (x) {
    var e = this.DOM;
    x = x.DOM || x;
    if (e.style.position != "") {
        if (e.scrollTop > x.offsetTop) {
            e.scrollTop = x.offsetTop;
        }
        else {
            e.scrollTop = x.offsetTop + x.offsetHeight - e.offsetHeight
        }
    }
    else {
        if (e.scrollTop > x.offsetTop) {
            e.scrollTop = x.offsetTop - x.parentNode.offsetTop + x.offsetHeight - e.offsetTop;
        }
        else {
            e.scrollTop = x.offsetTop - x.parentNode.offsetTop;
        }
    }
    return this;
};
//#endregion

//#region Anchor
function Anchor(e) {
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("a", e);
    }
    var $ = this;
    
    Element.Inherit($, e);
    $.__oh = e.href;
    $.IsFocused = false;

    $.Type = Type.Anchor;
    if (e.addEventListener) {
        e.addEventListener("blur", Element.__ob, true);
        e.addEventListener("focus", Element.__of, true);
    }
    else {
        e.onblur = Element.__ob;
        e.onfocus = Element.__of;
    }

    $.OnBlur = new UserEvent($, uvt.blr);
    $.OnFocus = new UserEvent($, uvt.fcs);
    $.Enabled = Anchor.prototype.Enabled;
    if (e.click === undefined) { e.click = Anchor.__cl; }
    
    if (!e.href) { e.href = "javascript: Null()"; }
    return $;
}

Anchor.prototype = new Content(null);
Anchor.constructor = Anchor;
Anchor.__cl = function () {
    var e = this.DOM;

    if (a.OnClick.length > 0) {
        if (a.OnClick.Fire()) {
            parent.location = e.href;
        }
    }

    return this;
};

Anchor.prototype.Enabled = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return this._en;
    }
    if (this._en == v) {
        return this;
    }

    this._en = v;
    if (!v) {
        this.Opacity(.5);
        this.__oh = e.href;
        e.href = "javascript: Null();";
    }
    else {
        if (this._en) {
            this.Opacity(1);
            e.href = this.__oh;
        }
    }

    return this;
};

Anchor.prototype.Href = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.href;
    }

    e.href = v;
    return this;
};

Anchor.prototype.Target = function (v) {
    var e = this.DOM;

    if (v === undefined) {
        return e.target;
    }

    e.target = v;
    return this;
};

//#endregion

//#region Body (Page)
function Body(e) {
    if (e.addEventListener) {
        e.addEventListener("keydown", Body.__kd, true);
        e.addEventListener("keyup", Body.__ku, true);
    }
    else {
        e.onkeydown = Body.__kd;
        e.onkeyup = Body.__ku;
    }

    var $ = this;
    Content.Inherit($, e);
    $.OnInitialization = new Event();
    $.OnClose = new UserEvent(window, uvt.bul);
    $.OnLoad = new UserEvent($, uvt.ld);
    $.OnScroll = Client.OnScroll;
    $.Type = Type.Body;
    if (document.forms[0]) {
        $.Form = new Form(document.forms[0]);
    }

    $.OnLoad.push($.__ol);
    return $;
}

Body.prototype = new Content(null);
Body.prototype.constructor = Body;
Body.__kd = function (event) {
    if (!event) { event = window.event; }
    var args2 = new KeyEventArgs(event, this);
    var s = event.key;
    if ((s >= 'A' && s <= 'Z') || (s >= 'a' && s <= 'z')) {
        Keyboard.CapsLockLock = s.toUpperCase() === s && s.toLowerCase() !== s && !event.shiftKey;
    }

    Keyboard.ShiftKey = event.shiftKey;
    Keyboard.ControlKey = event.ctrlKey
    Keyboard.AltKey = event.altKey
};

Body.__ku = function (event) {
    if (!event) { event = window.event; }
    Keyboard.ShiftKey = event.shiftKey;
    Keyboard.ControlKey = event.ctrlKey
    Keyboard.AltKey = event.altKey
}

Body.prototype.__doPostBack = function (t, a) {
    if (Page.Form.OnSubmit.Fire()) {
        if (!$HiddenField("__EVENTTARGET")) {
            Page.Form.AddElement(new HiddenField("__EVENTTARGET"));
        }
        if (!$HiddenField("__EVENTARGUMENT")) {
            Page.Form.AddElement(new HiddenField("__EVENTARGUMENT"));
        }
        var d = Page.Form.DOM;
        d.__EVENTTARGET.value = t;
        d.__EVENTARGUMENT.value = a;
        d.submit();
    }
};

Body.prototype.__hm = function (event) {
    var e = event ? event : window.event;
    Mouse.__lx = Mouse.X;
    Mouse.__ly = Mouse.Y;

    if (document.documentElement.scrollLeft > 0 || document.documentElement.scrollTop > 0) {
        Mouse.X = e.clientX + document.documentElement.scrollLeft;
        Mouse.Y = e.clientY + document.documentElement.scrollTop;
    }
    else {
        Mouse.X = e.clientX + document.body.scrollLeft;
        Mouse.Y = e.clientY + document.body.scrollTop;
    }

    Mouse.XChange = Mouse.X - Mouse.__lx;
    Mouse.YChange = Mouse.Y - Mouse.__ly;
    Mouse.ClientX = e.clientX;
    Mouse.ClientY = e.clientY;

    if (Mouse.OnMove.length > 0) {
        Mouse.OnMove.Fire();
    }
};

Body.prototype.__hu = function (event) {
    if (event === undefined) {
        event = window.event;
    }
    Mouse.OnMouseUp.Fire(new UserEventArgs(event, document));
};

Body.prototype.__hd = function (event) {
    if (event === undefined) {
        event = window.event;
    }
    Mouse.OnMouseDown.Fire(new UserEventArgs(event, document));
};

Body.prototype.__ol = function () {
    if (typeof (__doPostBack) !== undefined) {
        //makes sure linkbuttons call the OnSubmit event in ASP.NET
        __doPostBack = Page.__doPostBack;
    }

    NinJa.OnExceptionThrown.push(NinJa.DefaultExceptionHandler);

    document.onmousemove = Page.__hm;
    document.onmousedown = Page.__hd;
    document.onmouseup = Page.__hu;
};

Body.prototype.Close = function () {
    window.close();
    return this;
};

Body.prototype.Href = function (l) {
    if (l === undefined) {
        return window.location.href;
    }

    window.location = l;
};

Body.prototype.Refresh = function () {
    window.location = window.location;
}

Body.prototype.Status = function (v) {
    if (v === undefined) {
        return window.status;
    }
    else {
        window.status = v;
    }
};

Body.prototype.Parent = function () {
    if (window.parent.Page !== undefined) {
        return window.parent.Page;
    }
    return null;
};

Body.prototype.Title = function (v) {
    if (v === undefined) {
        return document.title;
    }

    document.title = v;
    return this;
};
//#endregion

//#region Input
function Input(e) {
    if (e === null) { return; }
    var $ = this;
    Element.Inherit($, e);
    $.IsFocused = false;
    if (e.addEventListener) {
        e.addEventListener("blur", Element.__ob, true);
        e.addEventListener("focus", Element.__of, true);
    }
    else {
        e.onblur = Element.__ob;
        e.onfocus = Element.__of;
    }
    $.OnBlur = new UserEvent($, uvt.blr);
    $.OnFocus = new UserEvent($, uvt.fcs);
    $.Enabled = Input.prototype.Enabled;
    $.__bp = e.getAttribute("bindfield");
    return e;
}

Input.prototype = new Element(null);

Input.prototype.BindData = function (v) {
    v = NinJa.EvalBind(this.__bp, v);
    if (v !== undefined) {
        this.Value(v);
    }
}

Input.prototype.ReadOnly = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.readonly;
    }

    e.readonly = v;
    return this;
};

Input.prototype.FocusNext = function () {
    var a = document.forms[0].elements,
        e = this.DOM,
        l = a.length;
    for (var i = 0; i < l; i++) {
        if (a[i] == e) {
            if (a[++i]) {
                if (a[i]) {
                    a[i].focus();
                    return this;
                }
            }
        }
    }
}

Input.prototype.FocusPrevious = function () {
    var a = document.forms[0].elements,
        e = this.DOM,
        l = a.length;
    for (var i = 0; i < l; i++) {
        if (a[i] == e) {
            if (a[--i]) {
                if (a[i]) {
                    a[i].focus();
                    return this;
                }
            }
        }
    }
}

Input.prototype.Value = function () { };
//#endregion

//#region LineBreak
function LineBreak() {
    return document.createElement("br");
}
//#endregion

//#region Button/ContentButton
function Button(e) {
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateInput(e, "button");
    }

    var $ = this;
    Input.Inherit($, e);
    $.Type = Type.Button;
    $.Text = TextBox.prototype.Text;
    $.Value = Button.prototype.Value;
}

Button.prototype = new Input(null);
Button.constructor = Button;

function ContentButton(e) {
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("button", e);
        e.type = "button";
    }

    var $ = this;
    Input.Inherit($, e);
    $.Type = Type.ContentButton;
}

ContentButton.prototype = new Content(null);
ContentButton.constructor = ContentButton;

Button.prototype.ButtonType =
ContentButton.prototype.ButtonType = function (t) {
    var e = this.DOM;
    if (t === undefined) {
        return e.type;
    }

    e.type = t;
    return this;
};
//#endregion

//#region Cell
function Cell(e) {
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("td", e);
    }
    Content.Inherit(this, e);
    this.NaturalDisplay = this.NaturalDisplay || "table-cell";
    this.Type = Type.Cell;
}

Cell.prototype = new Content(null);
Cell.constructor = Cell;
//#endregion

//#region CheckBox
function CheckBox(e) {
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateInput(e, "checkbox");
    }
    var $ = this;
    Input.Inherit($, e);
    $.Type = Type.CheckBox
    $.OnChange = $.OnCheckChanged = new UserEvent($, uvt.chg);
    $.Value = CheckBox.prototype.Value;
}

CheckBox.prototype = new Input(null);
CheckBox.constructor = CheckBox;

CheckBox.prototype.Checked = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.checked;
    }

    if (e.checked != v) {
        e.checked = v;

        if (this.OnCheckChanged.length > 0) {
            this.OnCheckChanged.Fire();
        }
    }
    return this;
};

CheckBox.prototype.Clear = function () {
    return this.Checked(false);
};

CheckBox.prototype.Value = function (b) {
    if (b === undefined) {
        return this.DOM.value;
    }

    this.DOM.value = b;
    return this;
};
//#endregion

//#region DropDownList
function DropDownList(e) {
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("select", e);
    }

    var $ = this;
    Input.Inherit($, e);
    $.__bt = e.getAttribute("bindtext") || "";
    $.__bv = e.getAttribute("bindvalue") || "";
    $.__bg = (e.getAttribute("bindtag") || "false").ToBoolean();
    $.Type = Type.DropDownList;
    $.OnChange = $.OnSelectionChanged = new UserEvent($, uvt.chg);
    $.Options = new ObservableArray($);

    var o = e.options, l = o.length, i;

    for (i = 0; i < l; i++) {
        $.Options.push(new Option(o[i]));
    }

    $.Options.OnChange.push(Option.__oc);
    $.Value = DropDownList.prototype.Value;
}

DropDownList.prototype = new Input(null);
DropDownList.constructor = DropDownList;

DropDownList.prototype.BindData = function (v) {
    v = NinJa.EvalBind(this.__bp, v);
    if (v !== undefined) {
        this.Value(v);
    }
}

DropDownList.prototype.BindTag = function (b) {
    if (b === undefined) {
        return this.__bg;
    }

    this.__bg = b;
}

DropDownList.prototype.BindText = function (t) {
    if (t === undefined) {
        return this.__bt;
    }

    this.__bt = t;
}

DropDownList.prototype.BindValue = function (t) {
    if (t === undefined) {
        return this.__bv;
    }

    this.__bv = t;
}

DropDownList.prototype.Bind = function (a) {
    var l = a.length;
    var v, i;
    this.Options.BeginUpdate();
    this.Options.Clear();
    var o;
    if (!this.__bt) { this.__bt = this.__bv; }
    if (!this.__bv) { this.__bv = this.__bt; }
    if (this.__bt && this.__bv) {
        for (i = 0; i < l; i++) {
            v = a[i];
            o = new Option(v[this.__bt], v[this.__bv]);
            this.Options.push(o);
            if (this.__bg) {
                o.Tag = v;
            }
        }
    }
    else if (a.Type === Type.Dictionary) {
        var k = a.Keys();
        l = k.length;
        for (i = 0; i < l; i++) {
            v = k[i];
            o = new Option(k[v], v);
            this.Options.push(o);
            if (this.__bg) {
                o.Tag = v;
            }
        }
    }
    else {
        for (i = 0; i < l; i++) {
            v = a[i];
            o = new Option(v, v);
            this.Options.push(o);
            if (this.__bg) {
                o.Tag = v;
            }
        }
    }

    this.Options.EndUpdate();
    return this;
}

DropDownList.prototype.Clear = function () {
    this.SelectedIndex(-1);

    return this;
};

DropDownList.prototype.SelectedIndex = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.selectedIndex;
    }

    e.selectedIndex = v;
    if (this.OnSelectionChanged.length > 0) {
        this.OnSelectionChanged.Fire();
    }
    return this;
};

DropDownList.prototype.SelectedOption = function (x) {
    var e = this.DOM;
    if (x === undefined) {
        if (e.selectedIndex > -1) {
            return this.Options[e.selectedIndex];
        }

        return null;
    }

    var o = this.Options, l = o.length, v, i;
    for (i = 0; i < l; i++) {
        v = o[i];
        if (v == x) {
            v.selected = true;
            if (this.OnSelectionChanged.length > 0) {
                this.OnSelectionChanged.Fire();
            }
            break;
        }
    }

    return this;
};

DropDownList.prototype.SelectedText = function (x) {
    var e = this.DOM;
    if (x === undefined) {
        if (e.selectedIndex > -1) {
            return this.Options[e.selectedIndex].Text();
        }

        return null;
    }

    var o = this.Options, l = o.length, v, i;
    for (i = 0; i < l; i++) {
        v = o[i];
        if (v.text == x) {
            v.selected = true;
            if (this.OnSelectionChanged.length > 0) {
                this.OnSelectionChanged.Fire();
            }
            break;
        }
    }

    return this;
};

DropDownList.prototype.SelectedValue = function (x) {
    var e = this.DOM;
    if (x === undefined) {
        if (e.selectedIndex > -1) {
            return this.Options[e.selectedIndex].Value();
        }

        return "";
    }

    e.selectedIndex = -1;
    if (x === null) {
        return this;
    }

    var o = this.Options, l = o.length, v, i;
    for (i = 0; i < l; i++) {
        v = o[i].DOM;
        if (v.value == x) {
            v.selected = true;
            if (this.OnSelectionChanged.length > 0) {
                this.OnSelectionChanged.Fire();
            }
            break;
        }
    }

    return this;
};

DropDownList.prototype.Value = function (t) {
    return this.SelectedValue(t);
};
//#endregion

//#region Div
function Div(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("div", e);
    }

    var $ = this;
    Content.Inherit($, e);
    $.OnScroll = new UserEvent($, uvt.scl);
    $.NaturalDisplay = $.NaturalDisplay || "block";
    $.Type = Type.Div;
}

Div.prototype = new Content(null);
Div.prototype.constructor = Div;
//#endregion

//#region FileUpload
function FileUpload(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateInput(e, "file");
    }

    var $ = this;
    Input.Inherit($, e);

    $.OnChange = new UserEvent($, uvt.chg);
    $.Type = Type.FileUpload;
    $.Accepts = new ObservableArray($);

    var s = e.accept.Split(","), l = s.length, i;
    for (i = 0; i < l; i++) {
        $.Accepts.push(s[i]);
    }

    $.Accepts.OnChange.push(FileUpload.RefreshAccepts);
    $.Value = FileUpload.prototype.Value;
}

FileUpload.prototype = new Input(null);
FileUpload.constructor = FileUpload;
FileUpload.RefreshAccepts = function () {
    var first = true, f = NinJa.Event.Sender, e = f.DOM, a = f.Accepts, l = f.Accepts.length, v, i;

    e.accept = "";
    for (i = 0; i < l; i++) {
        v = a[i];
        if (first) {
            e.accept = v;
            first = false;
        }
        else {
            e.accept += "," + v;
        }
    }
};

FileUpload.prototype.Value = function () {
    return this.DOM.value;
};
//#endregion

//#region Header (th)
function Header(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("th", e);
    }

    Content.Inherit(this, e);
    this.NaturalDisplay = this.NaturalDisplay || "table-group";
    this.Type = Type.Header;
}

Header.prototype = new Content(null);
Header.constructor = Header;
//#endregion

//#region HiddenField
function HiddenField(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateInput(e, "hidden");
    }

    var $ = this;

    $.__bp = e.getAttribute("bindfield");

    $.DOM = e;
    e.$ = $;
    $.Classes = new ClassArray($);
    $.Type = Type.HiddenField;
    $.OnChange = new UserEvent($, uvt.chg);
    $.ID = Element.prototype.ID;
}

HiddenField.prototype.Clear = function () {
    this.Value("");
    return this;
};

HiddenField.prototype.BindData = function (v) {
    v = NinJa.EvalBind(this.__bp, v);
    if (v !== undefined) {
        this.Value(v);
    }
}

Input.prototype.BindField =
HiddenField.prototype.BindField = function (v) {
    if (v === undefined) {
        return this.__bp;
    }

    this.__bp = va;
    e.setAttribute("bindfield", va);
    return this;
}

HiddenField.prototype.Value = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.value;
    }

    e.value = v;
    if (this.OnChange.length > 0) {
        this.OnChange.Fire();
    }

    return this;
};
//#endregion

//#region ImageElement (img)
function ImageElement(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("img", e);
    }

    var $ = this;
    Element.Inherit(this, e);
    $.NaturalDisplay = "inline";
    $.__os = e.getAttribute("source");
    $.Type = Type.Image;
}

ImageElement.prototype = new Element(null);
ImageElement.constructor = ImageElement;

ImageElement.prototype.Source = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return this.__os || e.src;
    }

    this.__os = e.src = v;
    return this;
};
//#endregion

//#region Label
function Label(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("label", e);
    }

    var $ = this;
    Content.Inherit($, e);
    $.Type = Type.Label;
}

Label.prototype = new Element(null);
Label.constructor = Label;

Label.prototype.For = function (i) {
    var e = this.DOM;
    if (i === undefined) {
        var s = e.getAttribute("for");
        if (s === null || s === undefined) {
            return "";
        }

        return s;
    }

    if (i.Type == Type.String) {
        e.setAttribute("for", i);
    }
    else {
        if (i.$) {
            e.setAttribute("for", i.$.id);
        }
        else {
            e.setAttribute("for", i.id);
        }
    }
    return this;
};

Label.prototype.Content = function (e) {
    if (e === undefined) {
        return this.DOM.innerHTML;
    }

    this.DOM.innerHTML = e;
    return this;
};

Label.prototype.Text = function (e) {
    if (e === undefined) {
        return this.DOM.innerText;
    }

    this.DOM.innerText = e;
    return this;
};
//#endregion

//#region ListBox
function ListBox(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("select", e);
        e.setAttribute("multiple", "multiple");
    }
    var $ = this;
    Input.Inherit($, e);

    $.OnChange = $.OnSelectionChanged = new UserEvent($, uvt.chg);
    $.OnSelectionChanged.push(ListBox.__sy);
    $.Options = new ObservableArray($);
    var o = e.options, l = o.length, i;

    for (i = 0; i < l; i++) {
        $.Options.push(new Option(o[i]));
    }

    $.Options.OnChange.push(Option.__oc);

    $.SelectedOptions = new ObservableArray($);
    $.SelectedIndices = new ObservableArray($);
    $.SelectedValues = new ObservableArray($);
    ListBox.__sy(new EventArgs($));
    $.SelectedOptions.OnChange.push(ListBox.__sy);
    $.SelectedIndices.OnChange.push(ListBox.__sy);
    $.SelectedValues.OnChange.push(ListBox.__sy);
    return e;
}

ListBox.prototype = new Input(null);
ListBox.constructor = ListBox;

ListBox.__sy = function (e) {
    var s = e.Sender, x = sel.DOM, o = x.options, l = o.length, v, i
    s.SelectedIndices.Updating = true;
    s.SelectedValues.Updating = true;
    s.SelectedOptions.Updating = true;
    s.SelectedIndices.Clear();
    s.SelectedValues.Clear();
    s.SelectedOptions.Clear();

    for (i = 0; i < l; i++) {
        v = o[i];
        if (v.selected) {
            s.SelectedOptions.push(v.$);
            s.SelectedIndices.push(i);
            s.SelectedValues.push(v.value);
        }
    }

    s.SelectedIndices.Updating = false;
    s.SelectedValues.Updating = false;
    s.SelectedOptions.Updating = false;
}

ListBox.prototype.Clear = function () {
    this.SelectedIndices.Clear();
    return this;
};
//#endregion

//#region ListItem
function ListItem(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("li", e);
    }

    var $ = this;
    Content.Inherit($, e);
    $.Type = Type.ListItem;
}

ListItem.prototype = new Content(null);
ListItem.constructor = ListItem;
//#endregion

//#region List
function List(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("ul", e);
    }

    var $ = this;
    Element.Inherit($, e);
    $.Type = Type.List;
    $.Items = new ObservableArray($);

    var c = e.children, l = c.length, v, i;
    for (i = 0; i < l; i++) {
        v = c[i];
        if (v.tagName == "LI") {
            $.Items.push(new ListItem(v));
        }
    }

    $.Items.OnChange.push(List.__ic);
}

List.prototype = new Element(null);
List.constructor = List;

List.__ic = function (e) {
    var d = e.Sender.Owner, x = d.DOM, o = e.Objects, l = o.length, c = Array.From(x.children), lc = c.length, a, b, p, i;
    switch (e.ModificationType) {
        case ModificationType.Add:
            for (i = 0; i < l; i++) {
                if (e.Index >= lc) {
                    x.$ap(o[i].DOM);
                }
                else {
                    x.$ib(o[i].DOM, c[e.Index++]);
                }
            }
            break;

        case ModificationType.Remove:
        case ModificationType.Clear:
            for (i = 0; i < l; i++) {
                x.$rc(o[i].DOM);
            }
            break;

        case ModificationType.Update:
            for (i = 0; i < lc; i++) {
                x.$rc(c[i].DOM);
            }

            for (i = 0; i < l; i++) {
                xd.$ap(o[i].DOM);
            }
            break;

        case ModificationType.Swap:
            a = o[0].DOM;
            b = o[1].DOM;
            p = document.createTextNode("beep");
            x.$ib(p, a);
            x.$rc(a);
            x.$ib(a, b);
            x.$rc(b);
            x.$ib(b, p);
            x.$rc(p);
            delete p;
            break;

        case ModificationType.Move:
            a = o[0].DOM;
            p = document.createTextNode("meep");
            x.$ib(p, a);
            x.$rc(a);
            e.Index;
            if (e.Index >= lc) {
                x.$ap(a);
            }
            else {
                x.$ib(a, c[e.Index]);
            }
            x.$rc(p);
            delete p;
            break;
    }
};

List.prototype.BulletType = function (t) {
    return this.Style("list-style-type", t);
}
//#endregion

//#region Option
function Option(e, v) {
    if (e === null) { return; }
    if (e === undefined && v === undefined) {
        e = document.createElement("option");
    }
    else if (e.tagName === undefined) {
        var text = e.ToString();
        e = document.createElement("option");
        e.text = text;
        e.value = v.ToString();
    }

    var $ = this;
    $.DOM = e;
    e.$ = $;
    $.Type = Type.Option;
}

Option.__oc = function (e) {
    var d = e.Sender.Owner,
    x = d.DOM,
    o = e.Objects,
    l = o.length,
    c = Array.From(x.options),
    k = c.length, i, j, a, b, v;

    var currentIndex = d.selectedIndex;
    switch (e.ModificationType) {
        case ModificationType.Add:
            for (i = 0; i < l; i++) {
                x.add(o[i].DOM, c[e.Index++]);
            }
            break;

        case ModificationType.Remove:
            for (i = 0; i < l; i++) {
                for (j = 0; j < k; j++) {
                    if (c[j] == o[i].DOM) {
                        x.remove(j);
                        break;
                    }
                }
            }
            break;
        case ModificationType.Clear:
            for (i = 0; i < l; i++) {
                x.remove(0);
            }
            break;

        case ModificationType.Update:
            for (i = 0; i < k; i++) {
                x.remove(0);
            }

            for (i = 0; i < l; i++) {
                x.add(o[i].DOM, null);
            }
            break;

        case ModificationType.Swap:
            a = o[0].DOM;
            b = o[1].DOM;
            p = document.createElement("option");
            x.add(p, a);
            for (j = 0; j < k; j++) {
                if (c[j] == a) {
                    x.remove(j);
                    break;
                }
            }
            x.add(a, b);
            for (j = 0; j < k; j++) {
                if (c[j] == b) {
                    x.remove(j);
                    break;
                }
            }
            x.add(b, p);
            for (j = 0; j < k; j++) {
                if (c[j] == p) {
                    x.remove(j);
                    break;
                }
            }

            delete p;
            break;

        case ModificationType.Move:
            a = o[0].DOM;
            for (j = 0; j < k; j++) {
                if (c[j] == a) {
                    x.remove(j);
                    break;
                }
            }
            x.add(a, c[e.Index]);
            delete p;
            break;
    }

    if (x.selectedIndex != currentIndex) {
        d.OnSelectionChanged.Fire();
    }
};

Option.prototype.Selected = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.selected;
    }

    e.selected = v;
    return this;
};

Option.prototype.Text = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.text;
    }

    e.text = v;
    return this;
};

Option.prototype.Value = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.value;
    }

    e.value = v;
    return this;
};
//#endregion

//#region Password
function Password(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateInput(e, "password");
    }

    var $ = this;
    Input.Inherit($, e);
    $.OnTextChanged = new UserEvent($, uvt.chg);
    $.Type = Type.Password;
    $.Text = TextBox.prototype.Text;
    $.Value = Password.prototype.Value;
}

Password.prototype = new Input(null);
Password.constructor = Password;
//#endregion

//#region RadioButton
function RadioButton(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateInput(e, "radio");
    }

    var $ = this;
    Input.Inherit($, e);
    $.Type = Type.RadioButton;
    $.OnChange = $.OnCheckChanged = new UserEvent($, uvt.chg);
    $.Value = RadioButton.prototype.Value;

    if (e.name) {
        if (!NinJa.__RBG[e.name]) {
            new RadioButtonGroup(e.name);
        }

        NinJa.__RBG[e.name].push(this);
        this.OnClick.Add(NinJa.__RBG[e.name].__sd);
    }
}

RadioButton.prototype = new Input(null);
RadioButton.constructor = RadioButton;

RadioButton.prototype.Checked = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.checked;
    }

    if (e.checked != v) {
        e.checked = v;

        if (this.OnCheckChanged.length > 0) {
            this.OnCheckChanged.Fire();
        }
        if (e.name) {
            var r = NinJa.__RBG[e.name];
            if (r.OnSelectionChanged.length > 0) {
                r.OnSelectionChanged.Fire();
            }
        }
    }

    return this;
};

RadioButton.prototype.Clear = function () {
    this.Checked(false);
    return this;
};

RadioButton.prototype.Value = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.value;
    }

    e.value = v;
    return this;
};
//#endregion

//#region RadioButtonGroup
function RadioButtonGroup(n) {
    var $ = new ObservableArray(), c = "", f = true, r = n;
    $.Name = n;
    $.__OnChange = $.OnChange;
    $.OnChange = $.OnSelectionChanged = new Event($);
    $.Type = Type.RadioButtonGroup;
    RadioButtonGroup.Extend($);

    n.Split("$").ForEachReversed(function (i, e) {
        if (f) {
            c = i;
            f = false;
        }
        else {
            c = i + "$" + c;
        }

        NinJa.__RBG[c] = $;
        r = c;
    });

    $.__OnChange.push(new Delegate($.__bc, $, [Delegate.Event]));
    $.__sd = new Delegate($.__is, $);

    return $;
}

RadioButtonGroup.prototype.__is = function () {
    this.OnSelectionChanged.Fire(new EventArgs(this));
}

RadioButtonGroup.prototype.__bc = function (e) {
    var o = e.Objects, l = o.length, v, i, d = e.Sender, group = e.Sender;
    switch (e.ModificationType) {
        case ModificationType.Add:
            for (i = 0; i < l; i++) {
                v = o[i];
                if (v.n) {
                    var g = $RadioButtonGroup(v.name);
                    if (!g) {
                        g = new RadioButtonGroup(v.name)
                    }

                    if (g != this) {
                        g.Remove(o[i]);
                    }
                }

                v.n = group.Name;
                $RadioButton(v).OnClick.Add(this.__sd);
            }
            break;

        case ModificationType.Remove:
        case ModificationType.Clear:
            for (i = 0; i < l; i++) {
                v = o[i];
                v.n = "";
                $RadioButton(v).OnClick.Remove(this.__sd);
                if (v.checked) {
                    d.OnSelectionChanged.Fire(new EventArgs(group));
                }
            }
            break;
    }
}

RadioButtonGroup.prototype.Value = function (e) {
    return this.SelectedValue(e);
};

RadioButtonGroup.prototype.SelectedValue = function (x) {
    var o = this, l = o.length, v, i;

    if (x === undefined) {
        for (i = 0; i < l; i++) {
            v = this[i].DOM;
            if (v.checked) {
                return v.value;
            }
        }

        return null;
    }

    for (var j = 0; j < l; j++) {
        v = o[j].DOM;
        v.checked = v.value == x
    }

    return this;
};
//#endregion

//#region Row
function Row(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("tr", e);
    }

    var $ = this;
    Content.Inherit($, e);
    $.Cells = new ObservableArray($);
    var a = e.cells, b = a.length, c;
    for (c = 0; c < b; c++) {
        $.Cells.push(new Cell(a[c]));
    }

    $.NaturalDisplay = "table-row";
    $.Type = Type.Row;
    $.Cells.OnChange.Add(Row.__cc);
}

Row.prototype = new Element(null);
Row.constructor = Row;
Row.__cc = function (e) {
    var d = e.Sender.Owner, x = d.DOM, o = e.Objects, l = o.length, c = Array.From(x.children), lc = c.length, i;
    switch (e.ModificationType) {
        case ModificationType.Add:
            for (i = 0; i < l; i++) {
                if (e.Index >= lc) {
                    x.$ap(o[i].DOM);
                }
                else {
                    x.$ib(o[i].DOM, c[e.Index++]);
                }
            }
            break;

        case ModificationType.Remove:
        case ModificationType.Clear:
            for (i = 0; i < l; i++) {
                x.$rc(o[i].DOM);
            }
            break;

        case ModificationType.Update:
            for (i = 0; i < lc; i++) {
                x.$rc(c[i]);
            }

            for (i = 0; i < l; i++) {
                x.$ap(o[i].DOM);
            }
            break;

        case ModificationType.Swap:
            var a = o[0].DOM;
            var b = o[1].DOM;
            var p = document.createTextNode("beep");
            x.$ib(p, a);
            x.$rc(a);
            x.$ib(a, b);
            x.$rc(b);
            x.$ib(b, p);
            x.$rc(p);
            delete p;
            break;

        case ModificationType.Move:
            a = o[0].DOM;
            p = document.createElement("option");
            x.$ib(p, a);
            x.$rc(a);
            e.Index;
            if (e.Index >= lc) {
                x.$ap(a);
            }
            else {
                x.$ib(a, c[e.Index]);
            }
            x.$rc(p);
            delete p;
            break;
    }
};

Content.prototype.BindData =
Row.prototype.BindData = function (v) {
    var a = Array.From(this.DOM.querySelectorAll("*[bindfield]")), l = a.length, i;
    for (i = 0; i < l; i++) {
        a[i].$.BindData(v);
    }
    if (this.__bp) {
        v = NinJa.EvalBind(this.__bp, v);
        if (v !== undefined) {
            this.Text(v);
        }
    }
}
Content.prototype.BuildObjectFromBinding =
Row.prototype.BuildObjectFromBinding = function () {
    var a = Array.From(this.DOM.querySelectorAll("*[bindfield]")), l = a.length, i, v, o = {};
    for (i = 0; i < l; i++) {
        v = a[i].$;
        if (v.Value !== undefined) {
            o[v.BindField()] = v.Value();
        }
    }

    return o;
};
//#endregion

//#region Span
function Span(e) {
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("span", e);
    }

    var $ = this;
    Content.Inherit($, e);
    $.Type = Type.Span;
}

Span.prototype = new Content(null);
Span.constructor = Span;
//#endregion

//#region Table
function Table(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("table", e);
    }

    var $ = this;
    Element.Inherit($, e);
    $.Bodies = [];

    if (e.tBodies.length == 0) {
        e.$ap(document.createElement("tbody"));
    }

    var o, l, v, i, a;
    a = e.tBodies;
    l = a.length;
    for (i = 0; i < l; i++) {
        v = a[i];
        $.Bodies.push(new TableBody(v));
    }

    $.Body = $.Bodies[0];
    $.Rows = $.Body.Rows;
    $.Type = Type.Table;
    //$.NaturalDisplay = "table";
    $.Head = null;
    $.Foot = null;

    if (e.tHead != null) {
        $.Head = new TableHead(e.tHead);
    }

    if (e.tFoot != null) {
        $.Foot = new TableFoot(e.tFoot);
    }
}

Table.prototype = new Element(null);
Table.constructor = Table;
Table.__rc = function (e) {
    var a, d = e.Sender.Owner, x = d.DOM, o = e.Objects, l = o.length, c = Array.From(x.children), lc = c.length, ia, b, p;
    switch (e.ModificationType) {
        case ModificationType.Add:
            for (i = 0; i < l; i++) {
                if (e.Index >= lc) {
                    x.$ap(o[i].DOM);
                }
                else {
                    x.$ib(o[i].DOM, c[e.Index++]);
                }
            }
            break;

        case ModificationType.Remove:
        case ModificationType.Clear:
            for (i = 0; i < l; i++) {
                x.$rc(o[i].DOM);
            }
            break;

        case ModificationType.Update:
            for (i = 0; i < lc; i++) {
                x.$rc(c[i]);
            }

            for (i = 0; i < l; i++) {
                x.$ap(o[i].DOM);
            }
            break;

        case ModificationType.Swap:
            a = o[0].DOM;
            b = o[1].DOM;
            p = document.createTextNode("beep");
            x.$ib(p, a);
            x.$rc(a);
            x.$ib(a, b);
            x.$rc(b);
            x.$ib(b, p);
            x.$rc(p);
            delete p;
            break;

        case ModificationType.Move:
            a = o[0].DOM;
            p = document.createElement("option");
            x.$ib(p, a);
            x.$rc(a);
            e.Index;
            if (e.Index >= lc) {
                x.$ap(a);
            }
            else {
                x.$ib(a, c[e.Index]);
            }
            x.$rc(p);
            delete p;
            break;
    }
};

Table.prototype.Border = function (v) {
    var e = this.DOM;
    if (v !== undefined) {
        e.border = v;
        return this;
    }

    return e.border;
};

Table.prototype.GridLines = function (g) {
    var e = this.DOM;
    if (g === undefined) {
        e.rules = g;
        return this;
    }

    return e.rules;
};

Table.prototype.CellSpacing = function (v) {
    var e = this.DOM;
    if (v !== undefined) {
        e.cellSpacing = v;
        return this;
    }

    return e.cellSpacing;
};

Table.prototype.CellPadding = function (v) {
    var e = this.DOM;
    if (v !== undefined) {
        e.cellPadding = v;
        return this;
    }

    return e.cellPadding;
};

Table.prototype.SetHead = function (t) {
    var e = this.DOM;
    t = t.DOM || t;
    if (e.tHead) {
        e.replaceChild(t, e.tHead);
    }
    else {
        e.insertBefore(t, e.firstChild);
    }
    this.Head = $Element(t);
};

Table.prototype.SetFoot = function (t) {
    var e = this.DOM;
    t = t.DOM || t;
    if (e.tFoot) {
        e.replaceChild(t, e.tFoot);
    }
    else {
        e.appendChild(t);
    }
    this.Foot = $Element(t);
};
//#endregion

//#region TableBody, TableHead, TableFoot
function TableBody(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("tbody", e);
    }

    var $ = this;
    Element.Inherit($, e);
    $.Rows = new ObservableArray($);
    var a = e.rows, b = a.length, c, d, f = NinJa;
    for (c = 0; c < b; c++) {
        $.Rows.push(new Row(a[c]));
    }
    //$.NaturalDisplay = "table-row-group";
    $.Rows.OnChange.push(Table.__rc);
    $.Type = Type.TableBody;
}

TableBody.prototype = new Element(null);
TableBody.constructor = TableBody;

function TableHead(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("thead", e);
    }
    var $ = this;
    Element.Inherit($, e);
    $.Rows = new RowArray($);
    var a = e.rows, b = a.length, c, d, f = NinJa;
    for (c = 0; c < b; c++) {
        $.Rows.push(new Row(a[c]));
    }
    $.Rows.OnChange.push(Table.__rc);
    $.Type = Type.TableHead;
    //$.NaturalDisplay = "table-header-group";
}

TableHead.prototype = new Element(null);
TableHead.constructor = TableHead;

function TableFoot(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("tfoot", e);
    }
    var $ = this;
    Element.Inherit($, e);
    $.Rows = new RowArray($);
    var a = e.rows, b = a.length, c, d, f = NinJa;
    for (c = 0; c < b; c++) {
        $.Rows.push(new Row(a[c]));
    }
    $.Rows.OnChange.push(Table.__rc);
    $.Type = Type.TableFoot;
    //$.NaturalDisplay = "table-footer-group";
}

TableFoot.prototype = new Element(null);
TableFoot.constructor = TableFoot;
//#endregion

//#region TextArea
function TextArea(e) {
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("textarea", e);
    }

    var m = e.getAttribute("maxlength");
    if (m) {
        e.__mx = m.ToInt();
    }

    var $ = this;
    Input.Inherit($, e);
    $.Type = Type.TextArea;
    $.OnChange = $.OnTextChanged = new UserEvent($, uvt.chg);
    $Text = TextBox.prototype.Text;
    $.__mx = 1048576;
    $.OnKeyDown.push(new Delegate(TextArea.__le, $, [Delegate.Event]));
    $.Value = TextArea.prototype.Value;
}
TextArea.prototype = new Input(null);
TextArea.constructor = TextArea;

TextArea.__le = function (e) {
    if (this.DOM.value.length >= this.__mx) {
        e.Handled = true;
        e.CancelEvent = true;
    }
};

TextArea.prototype.Columns = function (v) {
    var e = this.DOM;
    if (!v) {
        return e.cols;
    }

    e.cols = v;
    return this;
};

TextArea.prototype.Rows = function (v) {
    var e = this.DOM;
    if (!v) {
        return e.rows;
    }

    e.rows = v;
    return this;
};

TextArea.prototype.Text = function (t) {
    var e = this.DOM;
    if (t === undefined) {
        return e.value;
    }

    if (e.text !== t) {
        e.value = t.Substring(0, this.__mx);
        if (this.OnTextChanged.length > 0) {
            this.OnTextChanged.Fire();
        }
    }

    return this;
};

TextArea.prototype.MaxLength = function (m) {
    var e = this.DOM;
    if (m === undefined) {
        return e.__mx;
    }

    e.__mx = m;
    return this;
};
//#endregion

//#region TextBox
function TextBox(e) {
    if (e === null) { return; }
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateInput(e, "text");
    }

    var $ = this;
    Input.Inherit($, e);
    $.Text = TextBox.prototype.Text;
    $.Type = Type.TextBox;
    $.OnChange = $.OnTextChanged = new UserEvent($, uvt.chg);
    $.__Ad = new Delegate($.FormatText, $);
    $.OnBlur.Add($.__Ad);
    $.__De = new Delegate($.DeformatText, $);
    $.OnFocus.Add($.__De);
    $.__Af = (e.getAttribute("format") || "");

    $.AutoFormat($.__Af);
}

TextBox.prototype = new Input(null);
TextBox.constructor = TextBox;


TextBox.prototype.AutoFormat = function (a) {
    if (a) {
        this.__Af = a;
        this.__De.Enabled = this.__Ad.Enabled = true;
    }
    else {
        this.__Af = null;
        this.__De.Enabled = this.__Ad.Enabled = false
    }
};

TextBox.prototype.DeformatText = function () {
    this.Text(this.__OT);
    this.DOM.select();
};

TextBox.prototype.FormatText = function () {
    var o = this.Text(), t;
    this.__OT = o;
    if (o[this.__Af] !== undefined) {
        t = o[this.__Af]();
    }
    else {
        t = window[this.__Af](o);
    }
    this.Text(t);
};
//#endregion

//#region Window
function Window(id) {
    this.id = id === undefined ? "" : id;
    this.Width = 500;
    this.Height = 300;
    this.ShowMenuBar = false;
    this.ShowAddressBar = false;
    this.ShowToolBar = false;
    this.ShowScrollBars = true;
    this.ShowStatusBar = true;
    this.ShowTitleBar = true;
    this.Resizable = true;
    this.X = 0;
    this.Y = 0;
    this.Object = null;
    this.__lc = "";
    this.Type = Type.Window;
}

Window.prototype.Close = function () {
    this.Object.close();
    return this;
};

Window.prototype.Location = function (u) {
    if (u === undefined) {
        if (this.Object === null) {
            return null;
        }

        return this.Object.location;
    }

    this.__lc = u;
    if (this.Object === null || this.Object.closed) {
        this.Show(u);
    }
    else {
        this.Object.location = u;
        this.Object.focus();
    }

    return this;
};

Window.prototype.Show = function (u) {
    if (this.Object !== null) {
        if (!this.Object.closed) {
            this.Object.location = u;
        }
    }

    this.__lc = u;
    this.Object = window.open(this.__lc, "_blank", String.Format("toolbar={0},location={1},status={2},menubar={3},scrollbars={4},resizable={5},width={6},height={7},top={8},left={9}",
											    [this.ShowToolBar.ToYesNo(),
											    this.ShowAddressBar.ToYesNo(),
											    this.ShowStatusBar.ToYesNo(),
											    this.ShowMenuBar.ToYesNo(),
											    this.ShowScrollBars.ToYesNo(),
											    this.Resizable.ToYesNo(),
											    this.Width,
											    this.Height,
											    this.X,
											    this.Y]));

    if (!this.Object) {
        return null;
    }

    this.Shown = true;
    this.Object.focus();
    return this.Object;
};
//#endregion

//#region Functions shared across multiple element types
Cell.prototype.AttributeHeight =
Header.prototype.AttributeHeight =
Table.prototype.AttributeHeight = function (h) {
    var e = this.DOM;
    if (h === undefined) {
        if (e.height.IsInt()) {
            return e.height.ToInt();
        }
        return e.height;
    }

    if (h.Type == Type.Number) {
        e.height = h < 1 ? 1 : h;
    }
    else {
        e.height = h == "0%" ? 1 : h;
    }
    return this;
};

Cell.prototype.AttributeWidth =
Header.prototype.AttributeWidth =
Table.prototype.AttributeWidth = function (w) {
    var e = this.DOM;
    if (w === undefined) {
        if (e.width.IsInt()) {
            return e.width.ToInt();
        }
        return e.width;
    }

    if (w.Type == Type.Number) {
        e.width = w < 1 ? 1 : w;
    }
    else {
        e.width = w == "0%" ? 1 : w;
    }
    return this;
};


Anchor.prototype.Blur =
Input.prototype.Blur = function () {
    var e = this.DOM;
    e.blur();
    if (this.OnBlur.length > 0) {
        this.OnBlur.Fire();
    }
    return this;
};

Button.prototype.Clear =
Input.prototype.Clear =
TextArea.prototype.Clear =
TextBox.prototype.Clear =
Password.prototype.Clear = function () {
    this.Text("");
    return this;
};

Anchor.prototype.Click =
Button.prototype.Click =
ContentButton.prototype.Click = function () {
    this.DOM.click();
    return this;
};

ContentButton.prototype.Enabled =
Input.prototype.Enabled = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return !e.disabled;
    }

    e.disabled = !v;
    return this;
};

Anchor.prototype.Focus =
Input.prototype.Focus = function () {
    if (this.Displayed() && this.Enabled()) {
        var e = this.DOM;
        try {
            e.focus();
            if (this.OnFocus.length > 0) {
                this.OnFocus.Fire();
            }
        }
        catch (x) {

        }
    }
    return this;
};


Cell.prototype.HorizontalAlignment =
Header.prototype.HorizontalAlignment =
Row.prototype.HorizontalAlignment = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.align;
    }

    e.align = v;
    return this;
};

Password.prototype.MaxLength =
TextBox.prototype.MaxLength = function (m) {
    var e = this.DOM;
    if (m === undefined) {
        return e.maxLength;
    }

    e.maxLength = m;
    return this;
};


Password.prototype.Columns =
TextBox.prototype.Columns = function (s) {
    var e = this.DOM;
    if (s === undefined) {
        return e.size;
    }

    e.size = s;
    return this;
};

HiddenField.prototype.Name =
FileUpload.prototype.Name =
Input.prototype.Name = function (n) {
    var e = this.DOM;
    if (n === undefined) {
        return e.name;
    }

    e.name = n;
    return this;
};

Header.prototype.ColumnSpan =
Cell.prototype.ColumnSpan = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.colSpan;
    }

    e.colSpan = v;
    return this;
};

Header.prototype.ColumnSpan =
Cell.prototype.RowSpan = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.rowSpan;
    }

    e.rowSpan = v;
    return this;
};

Button.prototype.Text =
Password.prototype.Text =
TextBox.prototype.Text = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.value;
    }

    if (e.value !== v) {
        e.value = v;
        if (this.OnTextChanged && this.OnTextChanged.length > 0) {
            this.OnTextChanged.Fire();
        }
    }

    return this;
};

Button.prototype.Value =
Password.prototype.Value =
TextArea.prototype.Value = function (t) {
    return this.Text(t);
};

TextBox.prototype.Value = function (t) {
    return this.__OT || this.Text(t);
};

Cell.prototype.VerticalAlignment =
Header.prototype.VerticalAlignment =
Row.prototype.VerticalAlignment = function (v) {
    var e = this.DOM;
    if (v === undefined) {
        return e.vAlign;
    }

    e.vAlign = v;
    return this;
};
//#endregion

//#region Extensions
Anchor.Extensions = [];
Button.Extensions = [];
Cell.Extensions = [];
CheckBox.Extensions = [];
DropDownList.Extensions = [];
ContentButton.Extensions = [];
Div.Extensions = [];
FileUpload.Extensions = [];
Form.Extensions = [];
HiddenField.Extensions = [];
Header.Extensions = [];
ImageElement.Extensions = [];
Label.Extensions = [];
ListBox.Extensions = [];
List.Extensions = [];
ListItem.Extensions = [];
Password.Extensions = [];
RadioButton.Extensions = [];
Row.Extensions = [];
Span.Extensions = [];
Table.Extensions = [];
TextArea.Extensions = [];
TextBox.Extensions = [];

function Extension(c, f) {
    this.Function = f;
    this.ClassName = c;
}
//#endregion

var NinJa = function (o) {
    //#region Keyboard enumeration
    var k = Keys, $z = ASCII, $n, $e;

    k[8] = k.Backspace = 8;
    k[9] = k.Tab = 9;
    $z[10] = k[13] = k.Enter = 13;
    k[16] = k.Shift = 16;
    k[17] = k.Control = 17;
    k[18] = k.Alt = 18;
    k[20] = k.CapsLock = 20;
    k[27] = k.Escape = 27;
    $z[32] = k[32] = k.Spacebar = 32;
    k[33] = k.PageUp = 33;
    k[34] = k.PageDown = 34;
    k[35] = k.End = 35;
    k[36] = k.Home = 36;
    k[37] = k.LeftArrow = 37;
    k[38] = k.UpArrow = 38;
    k[39] = k.RightArrow = 39;
    k[40] = k.DownArrow = 40;
    k[45] = k.Insert = 45;
    k[46] = k.Delete = 46;
    $z[41] = $z[48] = k[48] = k.Zero = 48;
    $z[33] = $z[49] = k[49] = k.One = 49;
    $z[64] = $z[50] = k[50] = k.Two = 50;
    $z[35] = $z[51] = k[51] = k.Three = 51;
    $z[36] = $z[52] = k[52] = k.Four = 52;
    $z[37] = $z[53] = k[53] = k.Five = 53;
    $z[94] = $z[54] = k[54] = k.Six = 54;
    $z[38] = $z[55] = k[55] = k.Seven = 55;
    $z[42] = $z[56] = k[56] = k.Eight = 56;
    $z[40] = $z[57] = k[57] = k.Nine = 57;
    $z[58] = $z[59] = k[186] = k.SemiColon = 186;
    $z[97] = $z[65] = k[65] = k.A = 65;
    $z[98] = $z[66] = k[66] = k.B = 66;
    $z[99] = $z[67] = k[67] = k.C = 67;
    $z[100] = $z[68] = k[68] = k.D = 68;
    $z[101] = $z[69] = k[69] = k.E = 69;
    $z[102] = $z[70] = k[70] = k.F = 70;
    $z[103] = $z[71] = k[71] = k.G = 71;
    $z[104] = $z[72] = k[72] = k.H = 72;
    $z[105] = $z[73] = k[73] = k.I = 73;
    $z[106] = $z[74] = k[74] = k.J = 74;
    $z[107] = $z[75] = k[75] = k.K = 75;
    $z[108] = $z[76] = k[76] = k.L = 76;
    $z[109] = $z[77] = k[77] = k.M = 77;
    $z[110] = $z[78] = k[78] = k.N = 78;
    $z[111] = $z[79] = k[79] = k.O = 79;
    $z[112] = $z[80] = k[80] = k.P = 80;
    $z[113] = $z[81] = k[81] = k.Q = 81;
    $z[114] = $z[82] = k[82] = k.R = 82;
    $z[115] = $z[83] = k[83] = k.S = 83;
    $z[116] = $z[84] = k[84] = k.T = 84;
    $z[117] = $z[85] = k[85] = k.U = 85;
    $z[118] = $z[86] = k[86] = k.V = 86;
    $z[119] = $z[87] = k[87] = k.W = 87;
    $z[120] = $z[88] = k[88] = k.X = 88;
    $z[121] = $z[89] = k[89] = k.Y = 89;
    $z[122] = $z[90] = k[90] = k.Z = 90;
    k[96] = k.NumPadZero = 96;
    k[97] = k.NumPadOne = 97;
    k[98] = k.NumPadTwo = 98;
    k[99] = k.NumPadThree = 99;
    k[100] = k.NumPadFour = 100;
    k[101] = k.NumPadFive = 101;
    k[102] = k.NumPadSix = 102;
    k[103] = k.NumPadSeven = 103;
    k[104] = k.NumPadEight = 104;
    k[105] = k.NumPadNine = 105;
    k[106] = k.NumPadMultiply = 106;
    k[107] = k.NumPadAdd = 107;
    k[109] = k.NumPadMinus = 109;
    k[111] = k.NumPadDivide = 111;
    k[110] = k.NumPadDecimal = 110;
    $z[43] = $z[61] = k[187] = k.Equals = 187;
    $z[45] = $z[95] = k[189] = k.Minus = 189;
    k[144] = k.NumLock = 144;
    $z[44] = $z[60] = k[188] = k.Comma = 188;
    $z[46] = $z[62] = k[190] = k.Period = 190;
    $z[47] = $z[63] = k[191] = k.BackSlash = 191;
    $z[96] = $z[126] = k[192] = k.Tilde = 192;
    $z[91] = $z[123] = k[219] = k.OpenSquareBracket = 219;
    $z[92] = $z[124] = k[220] = k.ForwardSlash = 220;
    $z[93] = $z[125] = k[221] = k.CloseSquareBracket = 221;
    $z[39] = $z[34] = k[222] = k.Apostrophe = 222;
    //#endregion

    //#region NinJa namespace helpers
    o.CloneNode = function (x) {
        if (Client.Browser.Type == BrowserType.InternetExplorer && Client.Browser.Version == 8) {
            x = x.cloneNode(true);
            var i, a = Array.From(x.querySelectorAll("*")).Insert(0, x), v, l = a.length;
            for (i = 0; i < l; i++) {
                v = a[i];
                if (v.$ !== undefined) {
                    if (v.$.OnClick !== undefined) {
                        if (v.$.OnClick.__o !== undefined) {
                            v.setAttribute("onclick", v.$.OnClick.__o);
                        }
                    }
                }
            }
        }

        return x.cloneNode(true);
    }

    o.EvalBind = function (p, j) {
        if (j === undefined || j === null || p === null) {
            return undefined;
        }

        var a = p.Split("."), l = a.length, v, i;
        for (i = 0; i < l; i++) {
            v = a[i];
            if (v.StartsWith("@")) {
                v = v.Substring(1);
                j = window[v][j];
            }
            else {
                if (!NullOrUndefined(j[v])) {
                    if (j[v].Type == Type.Function) {
                        j = j[v]();
                    }
                    else {
                        j = j[v];
                    }
                }
                else {
                    return undefined;
                }
            }
        }

        if (j.Type == Type.DateTime && j.Equals(DateTime.Null)) {
            j = "";
        }
        return j;
    };

    o.CreateElement = function (t, i) {
        var a = document.createElement(t);
        a.id = i || "";
        return a;
    };

    o.CreateInput = function (id, type) {
        var a = document.createElement("input");
        a.type = type;
        a.id = id || "";
        return a;
    };

    o.WrapObjects = function (e) {
        var u, a = Array.From(e.querySelectorAll(NinJa.Mapper.Keys().ToString(","))), c = [], k, l = a.length, t, v, i, j;
        for (i = 0; i < l; i++) {

            u = a[i];
            ExtendElement(u);
            if (u.$._ !== undefined) {
                c.push(u);
            }
        }

        l = c.length;
        for (i = 0; i < l; i++) {
            u = c[i].$;
            v = u._;
            if (v !== undefined) {
                k = v.length;
                for (j = 0; j < k; j++) {
                    t = v[j];
                    t.Inherit(t.Extend(u));
                }
                delete u._;
            }
        }
    };

    //#endregion

    //#region NinJa instance stuff
    o.Initiated = false;
    o.__ID = {};
    o.__RBG = {};
    o.STC = null,
	o.Mapper = new Dictionary();
    o.DeobfuscateIds = true;
    o.Event = null;
    o.Initiated = false;
    o.ObfuscationCharacter = '_';
    o.OnInitialization = new Event(this);
    o.OnExceptionThrown = new Event(this),
	o.Version = "2.0";
    o.TouchStartAsOnClick = false;
    //#endregion

    //#region error handling

    function DefaultExceptionHandler(e) {
        alert("Script Version: " + NinJa.Version + "\nException: " + e.Message + "\nAt: " + e.Location + ".\nLine: " + e.LineNumber);
    }

    function ExtendElement(e) {
        var tag = e.tagName;
        if (tag == "INPUT") {
            tag = e.type;
        }

        var mapFunc;
        if (tag == "SELECT" && e.getAttribute("multiple")) {
            mapFunc = ListBox;
        }
        else {
            if (NinJa.Mapper[tag]) {
                mapFunc = NinJa.Mapper[tag];
            }
            else {
                mapFunc = Content;
            }
        }

        mapFunc.New(e);
        var $ = e.$, a = [];

        if (e.className && e.$) {
            var x = mapFunc.Extensions, l = x.length, v;
            for (var i = 0; i < l; i++) {
                v = x[i];
                if ($.Classes.Contains(v.ClassName)) {
                    a.push(v.Function);
                }
            }
            if (a.length) {
                $._ = a;
            }
        }
        v = e.id;
        if (NinJa.DeobfuscateIds) {
            var c = NinJa.ObfuscationCharacter, t, s, f, k;
            if (v && v.indexOf(c) > -1) {
                s = v.split(c), t = "", f = true, k = s.length - 1;
                do {
                    if (f) {
                        t = s[k];
                        f = false;
                    }
                    else {
                        t = s[k] + c + t;
                    }

                    NinJa.__ID[t] = $;
                    k--;
                } while (k > -1);
            }
            else {
                NinJa.__ID[v] = $;
            }
        }
        return $;
    };

    var ErrorCount = 0;
    function ErrorHandler(m, u, l) {
        ErrorCount++;
        if (NinJa.ErrorCount == 10) {
            alert("Too many errors have occurred. Supressing further error messages.");
        }

        if (NinJa.ErrorCount < 10) {
            NinJa.OnExceptionThrown.Fire(new ExceptionEventArgs(m, u == "" ? parent.location : u, l));
        }
    }
    //#endregion

    //#region defining reference functions
    window.$Anchor =
	window.$Button =
	window.$Cell =
	window.$CheckBox =
	window.$DropDownList =
	window.$Content =
	window.$ContentButton =
	window.$Div =
	window.$Element =
	window.$FileUpload =
	window.$Form =
	window.$HiddenField =
	window.$Header =
	window.$Image =
	window.$Input =
    window.$Label =
	window.$ListBox =
	window.$ListItem =
	window.$List =
	window.$Password =
	window.$RadioButton =
	window.$Row =
	window.$Span =
	window.$Table =
	window.$TableBody =
	window.$TableFoot =
	window.$TableHead =
	window.$TextArea =
	window.$TextBox = function (x) {
	    if (NullOrUndefined(x)) { return null; }
	    if (x.Type && x.Type !== Type.String) {
	        return x;
	    }

	    if (x.$) {
	        return x.$;
	    }

	    else if (x.DOM) {
	        return o;
	    }

	    else if (x.tagName) {
	        return ExtendElement(e);
	    }

	    var e, s, c, l, i, v, r, k, j, t;
	    e = NinJa.__ID[x];
	    if (e) {
	        return e;
	    }

	    e = document.getElementById(x);
	    if (e) {
	        if (e.$) {
	            return e.$;
	        }
	        else {
	            return ExtendElement(e);
	        }
	    }

	    if (x.indexOf(".") > -1) {
	        e = document.querySelectorAll("#" + x.split(".").ToString(" #"))[0];

	    }

	    if (!e) {
	        return null;
	    }

	    return e.$;
	};

    //#endregion

    //#region initialization code

    function Init() {
        if (o.Initiated) {
            return;
        }
        var m = o.Mapper;

        m.Add("FORM", Form);
        m.Add("text", TextBox);
        m.Add("password", TextBox);
        m.Add("hidden", HiddenField);
        m.Add("reset", Button);
        m.Add("submit", Button);
        m.Add("file", FileUpload);
        m.Add("button", Button);
        m.Add("radio", RadioButton);
        m.Add("checkbox", CheckBox);
        m.Add("INPUT", Input);
        m.Add("DIV", Div);
        m.Add("SPAN", Span);
        m.Add("A", Anchor);
        m.Add("BUTTON", ContentButton);
        m.Add("TEXTAREA", TextArea);
        m.Add("IMG", ImageElement);
        m.Add("SELECT", DropDownList);
        m.Add("LABEL", Label);
        m.Add("OL", List);
        m.Add("UL", List);
        m.Add("TABLE", Table);

        window.onerror = ErrorHandler;
        window.Page = {};
        window.Page.OnLoad = new Event();
    };

    function Initialize() {
        if (document.readyState != "complete") { return; }
        if (rsc) { clearInterval(rsc); }
        if (NinJa.Initiated) { return; }

        if (!document.body) {
            setTimeout(Initialize, 50);
            return;
        }

        var a,
             b = document.body,
             d,
             f,
             i,
             j,
             k,
             l,
             o = Page.OnLoad,
             r,
             s,
             t,
             u,
             v;

        if (b.onmousewheel === undefined) { uvt.mwl = "DOMMouseScroll"; }
        Page = new Body(b);
        NinJa.Mapper.Remove("FORM");
        Page.OnLoad.AddRange(o);
        Style.BoxSizing = Page.DOM.style.boxSizing !== undefined ? "boxSizing" : (Page.DOM.style.MozBoxSizing !== undefined ? "MozBoxSizing" : (Page.DOM.style.WebkitBoxSizing !== undefined ? "WebkitBoxSizing" : "boxSizing"));

        NinJa.OnInitialization.Fire();
        NinJa.Initiated = true;

        NinJa.WrapObjects(document);

        Page.OnLoad.Fire();
    }
    var rsc;
    if (document.onreadystatechange) {
        NinJa.STC = document.onreadystatechange;
    }
    else {
        rsc = setInterval(Initialize, 50);
    }

    document.onreadystatechange = Initialize;

    Init();
    o.$ = 0;
    return o;
    //#endregion
}({});

//#region Browser accesibility
var Mouse = {
    X: 0,
    Y: 0,
    ClientX: 0,
    ClientY: 0,
    XChange: 0,
    YChange: 0,
    __lx: 0,
    __ly: 0,
    OnMove: new Event(document),
    OnMouseUp: new Event(document),
    OnMouseDown: new Event(document)
};

var Keyboard = {
    ShiftKey: false,
    ControlKey: false,
    AltKey: false,
    CapsLock: false
};

var Client = function ($c) {
    $c.Cookies = new ObservableArray($c);
    $c.Browser = new Browser();
    $c.OnResize = new Event($c);
    $c.OnScroll = new Event($c);
    var c, i;
    var ck = $c.Cookies;
    if (document.cookie !== undefined) {
        var sc = document.cookie.Split(";");
        var s;
        var l = sc.length;
        for (i = 0; i < l; i++) {
            s = sc[i].TrimLeft();
            c = new Cookie();
            c.__ld(s);
            ck.push(c);
            ck[c.Name()] = c;
        }
    }

    $c.Cookies.OnChange.push(new Delegate(CookiesChanged, $c, [Delegate.Event]));

    function CookiesChanged(e) {
        var o = e.Objects;
        var l = o.length;
        var v;
        var i = 0;
        switch (e.ModificationType) {
            case ModificationType.Add:
                for (; i < l; i++) {
                    v = o[i];
                    v.__sv();
                    Client.Cookies[v.Name()] = v;
                }
                break;

            case ModificationType.Remove:
            case ModificationType.Clear:
                l--;
                do {
                    o[l].__de();
                } while (l);
                break;
        }
    };

    $c.CheckCookieSize = function () {
        var c = $c.Cookies;
        var l = c.length;
        var size = 0;
        var i;
        for (i = 0; i < l; i++) {
            size += c[i].Raw.length;
        }

        return size;
    }

    $c.Height = function () {
        var h;
        if (window.innerHeight !== undefined) { h = window.innerHeight; }
        else if (document.documentElement.clientHeight !== undefined) {
            h = document.documentElement.clientHeight;
        }

        return h;
    };

    $c.Popup = function (u, w, h) {
        var x = new Window();
        x.Width = w;
        x.Height = h;
        x.Show(u);
        return x;
    };


    $c.Width = function () {
        var w;
        if (window.innerwidth !== undefined) { w = window.innerWidth; }
        else if (document.documentElement.clientWidth !== undefined) {
            w = document.documentElement.clientWidth;
        }

        return w;
    };

    $c.VerticalScrollPosition = function (s) {
        if (s === undefined) {
            return window.scrollY || document.body.parentNode.scrollTop;
        }

        window.scrollTo(window.scrollX || document.body.parentNode.scrollLeft, s);
    };

    $c.HorizontalScrollPosition = function (s) {
        if (s === undefined) {
            return window.scrollX || document.body.parentNode.scrollLeft;
        }

        window.scrollX = document.body.parentNode.scrollLeft = s;
    };

    $c.Storage = {
        Local: new Storage(window.localStorage),
        Session: new Storage(window.sessionStorage)
    };

    window.onscroll = function () {
        if (Client.OnScroll.length > 0) {
            Client.OnScroll.Fire();
        }
    };

    window.onresize = function () {
        if (Client.OnResize.length > 0) {
            Client.OnResize.Fire();
        }
    };

    return $c;
}({});
//#endregion

//#region Storage
function Storage(l) {
    this.__Type = l;
};

Storage.prototype.SetItem = function (k, v) {
    if (v.Type == Type.String || v.Type == Type.Number) {
        this.__Type[k] = v;
    }
    else if (v.Type == Type.DateTime) {
        this.__Type[k] = "JSONDateTime$" + v.ToString();
    }
    else {
        this.__Type[k] = "JSON$" + JSON.stringify(v);
    }

    return this;
};

Storage.prototype.GetItem = function (k) {
    var s = this.__Type[k];
    if (s) {
        if (s.StartsWith("JSON$")) {
            s = JSON.parse(s.Substring(5));
        }
        else if (s.StartsWith("JSONDateTime$")) {
            s = new DateTime(s.Substring(13));
        }
        else if (s.StartsWith("JSONDate$")) {
            s = new Date(s.Substring(9));
        }
    }

    return s;
};

Storage.prototype.RemoveItem = function (k) {
    this.__Type.removeItem(k);
    return this;
};

Storage.prototype.RemoveAll = function () {
    this.__Type.clear();
    return this;
};

Storage.prototype.Keys = function () {
    var v = [];
    for (var k in this) {
        if (this.__Type.hasOwnProperty(k)) {
            v.push(k);
        }
    }

    return v;
};

Storage.prototype.Values = function () {
    var v = [], k = this.Keys(), l = k.length, i;
    for (i = 0; i < l; i++) {
        v.push(this.GetItem(k));
    }

    return v;
};

Storage.prototype.Items = function () {
    var v = [], k = this.Keys(), l = k.length, i;
    for (i = 0; i < l; i++) {
        v.push(new KeyValuePair(k, this.GetItem(k)));
    }

    return v;
};

Storage.prototype.BytesFree = function () {
    return this.__Type.remainingSpace;
};
//#endregion

//#region Helpers for NinJa
function LazyEnum(e) {
    for (var n in e) {
        if (n != "Inherit" && n != "Extend") {
            e[n.toLowerCase()] = e[n];
        }
    }

    return e;
}

LazyEnum(Colors);

function ConvertObjectToJSON(o) {
    return JSON.stringify(o);
};

String.prototype.ToObjectFromJSON = function () {
    return ConvertMSDates(JSON.parse(this));
};

function ConvertMSDates(o) {
    var v;
    if (NullOrUndefined(o)) { return; }
    if (o.Type == Type.Array) {
        var l = o.length;
        for (var i = 0; i < l; i++) {
            ConvertMSDates(o[i]);
        }
    }

    for (var n in o) {
        v = o[n];
        if (!NullOrUndefined(v)) {
            if (v.Type == Type.Array || v.Type == undefined) {
                ConvertMSDates(v);
            }
            else if (v.Type == Type.String) {
                var a = v.match(/\/Date\((-?\d+)\)\//);
                if (a) {
                    o[n] = new DateTime(parseInt(a[1], 10)).Subtract(new TimeSpan(0, DateTime.TimezoneOffset()));
                }
            }
        }
    }

    return o;
}
//#endregion
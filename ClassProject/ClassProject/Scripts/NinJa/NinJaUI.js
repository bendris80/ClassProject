///<reference path="~/scripts/NinJa.js" />


var NinJaUI = {
    Version: "1.0",
    ZIndex: 1000
};

var Speed = {
    Slow: 400,
    Normal: 200,
    Fast: 100
};

var Alignment = {
    Top: 0,
    Bottom: 1,
    Left: 2,
    Right: 3,
    Center: 4,
    Middle: 5
};

var Aspect = {
    Outside: 0,
    Inside: 1
};

var Side = {
    Top: 1,
    Bottom: 2,
    Left: 4,
    Right: 8,
    All: 15
};

var Direction = {
    Vertical: 1,
    Horizontal: 2,
    Diagonal: 3
};

var Effects = LazyEnum({
    None: "none",
    Fade: "fade",
    Slide: "slide",
    FoldVertical: "foldv",
    FoldHorizontal: "foldh",
    FoldBoth: "foldd"
});

var Edge = LazyEnum({
    NorthWest: Cursor.NorthWest,
    SouthEast: Cursor.SouthEast,
    SouthWest: Cursor.SouthWest,
    NorthEast: Cursor.NorthEast,
    North: Cursor.North,
    West: Cursor.West,
    South: Cursor.South,
    East: Cursor.East
});

NinJaUI.TextHeight = function (t, f, s) {
    var d = new Span();
    f = f || "default";
    s = s || "default";
    d.Position("absolute").Style(Style.Padding, "0").Style(Style.Margin, "0").Style(Style.FontFamily).Style(Style.FontSize, s + "pt").Text(t);
    Page.AddElement(d);
    s = d.Height();
    Page.Remove(d);
    return s;
};

NinJaUI.TextWidth = function (t, f, s) {
    var d = new Span();
    f = f || "default";
    s = s || "default";
    d.Position("absolute").Style(Style.Padding, "0").Style(Style.Margin, "0").Style(Style.FontFamily).Style(Style.FontSize, s + "pt").Text(t);
    Page.AddElement(d);
    s = d.Width();
    Page.Remove(d);
    return s;
};

function Animation(el, pr, fr, to, ti, sm) {
    this.Element = el;
    this.Property = pr;
    this.From = fr;
    this.To = to;
    this.__oto = to;
    this.__ofrom = fr;
    this.Frames = sm;
    this.Value = fr;
    this.__ostep = sm;
    this.Timer = new Timer(ti / sm, true);
    this.Timer.OnTrigger.Add(new Delegate(this.Next, this));
    this.OnFinish = null;
}

Animation.prototype.Reverse = function (f) {
    this.Timer.Stop();
    this.Steps = this.__ostep;
    this.To = this.__ofrom;
    this.From = this.__oto
    this.Animate(f);
    return this;
};
Animation.prototype.Start = function (f) {
    this.Timer.Stop();
    this.Steps = this.__ostep;
    this.To = this.__oto;
    this.From = this.__ofrom;
    this.Animate(f);
    return this;
};

Animation.prototype.Animate = function (f) {
    this.Element[this.Property](this.From);
    this.Value = this.From;
    this.OnFinish = f;
    if (this.To.Type != Type.Array) {
        this.Step = this.From.GetIncrements(this.To, this.Steps);
    }
    else {
        this.Index = 0;
    }
    this.Timer.Start();
    return this;
}

Animation.prototype.Next = function () {
    if (this.Index !== undefined) {
        this.Index++;
        if (this.Index >= this.To.length) {
            this.Index = 0;
        }
        this.Value = this.To[this.Index];
    }
    else {
        this.Value = this.Value.Increment(this.Step);
    }

    this.Element[this.Property](this.Value);
    this.Steps--;
    if (this.Steps == 0) {
        this.Element[this.Property](this.To);
        this.Timer.Stop();
        if (this.OnFinish) {
            this.OnFinish();
        }
    }

};

Animation.prototype.Stop = function () {
    this.Timer.Stop();
    return this;
};


Element.prototype.FadeOut = function (t, s, f) {
    t = t || 300;
    s = s || 6;
    return new Animation(this, "Opacity", this.Opacity(), 0, t, s).Start(f);
};

Element.prototype.FadeIn = function (t, s, f) {
    t = t || 300;
    s = s || 6;
    return new Animation(this, "Opacity", this.Opacity(), 1, t, s).Start(f);
};

Element.prototype.FadeTo = function (x, t, s, f) {
    t = t || 300;
    s = s || 6;
    return new Animation(this, "Opacity", this.Opacity(), x, t, s).Start(f);
};

Element.prototype.ToggleFade = function (t, s, f) {
    t = t || 300;
    s = s || 6;
    return this.Opacity() == 1 ? this.FadeOut(t, s, f) : this.FadeIn(t, s, f);
};

Element.prototype.ResizeTo = function (sz, t, s, f) {
    t = t || 300;
    s = s || 10;
    return new Animation(this, "Size", this.Size(), sz, t, s).Start(f);
};

Element.prototype.Shrink = function (d, t, s, f) {
    d = d || Direction.Diagonal;
    t = t || 300;
    s = s || 20;
    var to, sz = this.Size(), tz = this.Size();;
    if (d & Direction.Horizontal)
        tz.Width = 0;

    if (d & Direction.Vertical)
        tz.Height = 0;

    return new Animation(this, "Size", this.Size(), tz, t, s).Start(f);
};

Element.prototype.SlideTo = function (l, t, s, f) {
    t = t || 300;
    s = s || 20;
    return new Animation(this, "Location", this.Location(), l, t, s).Start(f);
};

Element.prototype.Grow = function (d, t, s, f) {
    d = d || Direction.Diagonal;
    t = t || 300;
    s = s || 20;
    var v = this.Visible();
    var os = this.Size();
    this.Visible(false).Style(Style.Width, "").Style(Style.Height, "");
    var ts = this.Size(), tz = new Size();

    if (d & Direction.Horizontal)
        tz.Width = ts.Width;

    if (d & Direction.Vertical)
        tz.Height = ts.Height;

    this.Size(os).Visible(v);
    return new Animation(this, "Size", os, tz, t, s).Start(f);
}

Element.prototype.ToggleSize = function (d, t, s, f) {
    if (this.Width() == 0) {
        return this.Grow(d, t, s, f);
    }

    return this.Shrink(d, t, s, f);
};

Element.prototype.BlendBgTo = function (c, t, s, f) {
    t = t || 200;
    s = s || 10;
    if (c.Type != Type.Color) {
        c = Color.FromRGB(c);
    }
    var b = this.BackgroundColor();
    if (b.Type != Type.Color) {
        b = Color.FromRGB(b);
    }
    return new Animation(this, "BackgroundColor", b, c, t, s).Start(f);
};

Element.prototype.BlendFgTo = function (c, t, s, f) {
    t = t || 200;
    s = s || 10;
    if (c.Type != Type.Color) {
        c = Color.FromRGB(c);
    }
    var b = this.BackgroundColor();
    if (b.Type != Type.Color) {
        b = Color.FromRGB(b);
    }
    return new Animation(this, "ForegroundColor", b, c, t, s).Start(f);
};

String.prototype.Increment = function (s) {
    return (this.Remove("%").ToInt() + s).ToString() + "%";
};

String.prototype.GetIncrements = function (t, sm) {
    return ((t - this.Remove("%").ToFloat()) / sm).ToInt().ToString("%");
};

function Size(w, h) {
    this.Width = w;
    this.Height = h;
}

Size.prototype.Increment = function (s) {
    return new Size(this.Width + s.Width, this.Height + s.Height);
};

Size.prototype.GetIncrements = function (n, s) {
    var z = new Size();
    if (n.Width !== undefined) {
        z.Width = (n.Width - this.Width) / s;
    }

    if (n.Height !== undefined) {
        z.Height = (n.Height - this.Height) / s;
    }

    return z;
};


function Location(x, y) {
    this.X = x;
    this.Y = y;
}

Location.prototype.Increment = function (l) {
    return new (this.X + l.X, this.Y + l.Y);
};

Location.prototype.GetIncrements = function (n, s) {
    return new Location((n.X - this.X) / s, (n.Y - this.Y) / s);
};


Number.prototype.Increment = function (n) {
    return this + n;
}

Number.prototype.GetIncrements = function (n, s) {
    return (n - this) / s;
};

Color.prototype.Increment = function (c) {
    return new Color(this.Red + c.Red, this.Green + c.Green, this.Blue + c.Blue);
};

Color.prototype.GetIncrements = function (c, s) {
    return new Color((c.Red - this.Red) / s, (c.Green - this.Green) / s, (c.Blue - this.Blue) / s);
};

Element.prototype.Size = function (s) {
    if (s === undefined) {
        return new Size(this.Width(), this.Height());
    }

    if (s.Width !== undefined) {
        this.Width(s.Width);
    }
    if (s.Height !== undefined) {
        this.Height(s.Height);
    }

    return this;
};

Element.prototype.Location = function (l) {
    if (l === undefined) {
        return new Location(this.X(), this.Y());
    }

    this.X(l.X).Y(l.Y);
    return this;
};

function Bounds(l, r, t, b) {
    this.Left = l || 0;
    this.Right = r || 0;
    this.Top = t || 0;
    this.Bottom = b || 0;
    this.Center = ((this.Right - this.Left) / 2) + this.Left;
    this.Middle = ((this.Bottom - this.Top) / 2) + this.Top;
}

Bounds.prototype.Contains = function (x, y) {
    return x.Between(this.Left, this.Right, true) && y.Between(this.Top, this.Bottom, true);
};

Bounds.prototype.OnEdge = function (x, y, e, p) {
    p = p || 1;
    switch (e) {
        case Edge.North:
            return y - this.Top <= p;

        case Edge.NorthWest:
            return y - this.Top <= p && x - this.Left <= p;

        case Edge.West:
            return x - this.Left <= p;

        case Edge.SouthWest:
            return this.Bottom - y <= p && x - this.Left <= p;

        case Edge.South:
            return this.Bottom - y <= p;

        case Edge.SouthEast:
            return this.Bottom - y <= p && this.Right - x <= p;

        case Edge.East:
            return this.Right - x <= p;

        case Edge.NorthEast:
            return y - this.Top <= p && this.Right - x <= p;
    }
};

Element.prototype.GetBounds = function () {
    return new Bounds(this.X(), this.LayoutWidth() + this.X(), this.Y(), this.LayoutHeight() + this.Y());
};

Element.prototype.SnapTo = function (e, s, a, p, xP, yP) {
    var b, u = this.Width(), v = this.Height(), x, y;
    xP = xP || 0;
    yP = yP || 0;
    p = p || 0;

    if (e == Client) {
        var h = Client.HorizontalScrollPosition();
        var v = Client.VerticalScrollPosition();
        b = new Bounds(h, Client.Width() + h, v, Client.Height() + v);
    }
    else {
        b = e.GetBounds();
    }

    if (p == 0) {
        switch (s) {
            case Side.Left:
                x = b.Left - u - xP;
                break;

            case Side.Right:
                x = b.Right + xP;
                break;

            case Side.Top:
                y = b.Top - v - yP;
                break;

            case Side.Bottom:
                y = b.Bottom + yP;
                break;
        }
    }
    else {
        switch (s) {
            case Side.Left:
                x = b.Left + xP;
                break;

            case Side.Right:
                x = b.Right - u - xP;
                break;

            case Side.Top:
                y = b.Top + yP;
                breka;

            case Side.Bottom:
                y = b.Bottom - v - yP;
                break;
        }
    }


    switch (a) {
        case Alignment.Left:
            x = b.Left + xP;
            break;

        case Alignment.Right:
            x = b.Right - u - xP;
            break;

        case Alignment.Center:
            x = parseInt((b.Left + b.Right) / 2 - (u / 2));

        case Alignment.Top:
            y = b.Top + yP;
            break;

        case Alignment.Bottom:
            y = b.Bottom - v - yP;
            break;

        case Alignment.Middle:
            y = parseInt((b.Top + b.Bottom) / 2 - (v / 2));
            break;
    }

    this.X(x).Y(y);
    return this;
}

Content.prototype.IsClipped = function (e) {
    var c = this.GetBounds();
    var p;
    if (e == Client) {
        p = new Bounds(0, Client.Width(), 0, Client.Height());
    }
    else {
        p = e.GetBounds()
    }

    p.Left += Client.HorizontalScrollPosition();
    p.Right += Client.HorizontalScrollPosition();
    p.Top += Client.VerticalScrollPosition();
    p.Bottom += Client.VerticalScrollPosition();

    return !(c.Left >= p.Left &&
             c.Right <= p.Right &&
             c.Top >= p.Top &&
             c.Bottom <= p.Bottom);
}

Color.prototype.Darken = function (p) {
    return new Color(parseInt(this.Red - (this.Red * p)), parseInt(this.Green - (this.Green * p)), parseInt(this.Blue - (this.Blue * p)));
};

//#region Accordion
Div.Extensions.Add(new Extension("accordion", Accordion));

$Accordion = $AccordionItem = $Anchor;
Type.Accordion = Type.$++;
Type.AccordionItem = Type.$++;

function Accordion(e) {
    if (this.DOM === undefined) {
        return Accordion.Inherit(Accordion.Extend(new Div(e).ClassName("accordion")));
    }

    var $ = this;
    e = $.DOM;
    $.__si = null;
    //$.__ef = e.getAttribute("effect") || "none";
    $.__hc = e.getAttribute("headerclass") || "accordionheader";
    $.__sc = e.getAttribute("selectedclass") || "selected";
    $.__il = e.getAttribute("itemclass") || "accordionitem";
    $.Items = new ObservableArray($);

    var c = Array.From(e.children);
    var l = c.length;
    var v;
    for (var i = 0; i < l; i++) {
        v = c[i];
        if (v.tagName == "DIV") {
            v = v.$;
            AccordionItem.Extend(AccordionItem.Inherit(v));
            $.Items.Add(v);
            $.InsertElementBefore(v.Header, v);
            v.Classes.Add($.__il);
            v.Header.Classes.Add($.__hc);
            //v.__ef = new Effect(v, $.__ef, 1, 0, Speed.Normal, Smoothness.Smoothest);
        }
    }

    $.Items.OnChange.Add(new Delegate($.__ItemsChanged, $, [Delegate.Event]));
    $.OnSelectionChanged = new Event();
}

Accordion.prototype.__ItemsChanged = function (e) {
    var o = e.Objects, l = o.length, v, i;
    switch (e.ModificationType) {
        case ModificationType.Add:
            for (i = 0; i < l; i++) {
                v = o[i];
                this.AddElements([v.Header, v]);
                v.ClassName(this.__il).Header.ClassName(this.__hc);
                //v.__ef = new Effect(v, this.__ef, 1, 0, Speed.Fastest, Smoothness.Normal);
            }
            break;

        case ModificationType.Remove:
        case ModificationType.Clear:
            for (i = 0; i < l; i++) {
                v = o[i];
                this.RemoveElements([v.Header, v]);
            }
            break;

        case ModificationType.Move:
        case ModificationType.Swap:
        case ModificationType.Update:
            this.RemoveElements(Array.From(this.DOM.children));
            o = this.Items;
            l = o.length;
            for (i = 0; i < l; i++) {
                v = o[i];
                this.AddElements([v.Header, v]);
            }
            break;
    }
}

Accordion.prototype.HeaderClass = function (c) {
    if (c === undefined) {
        return this.__hc;
    }

    this.__hc = c;
    var i, a = this.Items, l = a.length;
    for (i = 0; i < l; i++) {
        a[i].Header.ClassName(c);
    }

    return this;
}

Accordion.prototype.ItemClass = function (c) {
    if (c === undefined) {
        return this.__il;
    }

    this.__il = c;
    var i, a = this.Items, l = a.length;
    for (i = 0; i < l; i++) {
        a[i].ClassName(c);
    }

    return this;
}

Accordion.prototype.SelectedClass = function (c) {
    if (c === undefined) {
        return this.__sc;
    }

    this.__sc = c;
    if (this.__si) {
        this.__si.ClassName(c);
    }
    return this;
}

Accordion.prototype.SelectedItem = function (i) {
    var s = this.__si;
    if (i === undefined) {
        return s;
    }

    if (s) {
        s.Header.Classes.Remove(this.__sc);
        s.Collapsed(true); //s.__ef.Reverse();
    }

    s = i;
    if (i !== null) {
        s.Collapsed(false); // s.__ef.Play();
        s.Header.Classes.Add(this.__sc);
    }
    if (this.OnSelectionChanged.length > 0) {
        this.OnSelectionChanged.Fire(new EventArgs(this));
    }

    this.__si = s;

    return this;
}

//#endregion

//#region AccordionItem
function AccordionItem(e) {
    if (this.DOM === undefined) {
        return AccordionItem.Inherit(AccordionItem.Extend(new Div(e)));
    }

    var $ = this;
    e = $.DOM;
    var t = e.getAttribute("header");

    $.Collapsed(true);
    $.Header = new Div().Cursor(Cursor.Pointer);

    if (t) {
        $.Header.Text(t);
    }

    t = $.ElementsByClassName("header");
    if (t[0]) {
        t = $Div(t[0]);
        t.DOM.parentNode.removeChild(t.DOM);
        t.Classes.Remove("header");
        $.Header.AddElement(t);
    }

    $.__sd = (e.getAttribute("selected") || "false").ToBoolean()

    $.Header.OnClick.Add(new Delegate($.Toggle, $, ["Selected"]));

}

AccordionItem.prototype = new Div(null);
AccordionItem.prototype.constructor = AccordionItem;
AccordionItem.prototype.Selected = function (s) {
    var p = this.DOM.parentNode.$;
    if (s === undefined) {
        return p.__si == this;
    }

    if (s === true) {
        if (p.__si != this) {
            p.SelectedItem(this);
        }

        return this;
    }

    if (p.__si == this) {
        p.SelectedItem(null);
    }

    return this;
}

//#endregion

//#region DatePicker
Type.DatePicker = Type.$++;
$DatePicker = $Anchor;

TextBox.Extensions.Add(new Extension("datepicker", DatePicker));

function DatePicker(e) {
    if (this.DOM === undefined) {
        return DatePicker.Inherit(DatePicker.Extend(new TextBox(e).ClassName("datepicker")));
    }
    var $ = this, t, a, i, v, l, b;
    e = $.DOM;
    $.__dp = new Div().Position("absolute").Collapsed(true);
    t = $.__Table = new Table().ClassName("datepicker").CellPadding(0).CellSpacing(0).Style(Style.TableLayout, "fixed").Style(Style.ZIndex, NinJaUI.ZIndex++);
    t.SetHead(new TableHead());
    $.__dp.AddElement(t);
    $.__pc = e.getAttribute("padclass") || "pad";
    $.__pd = (e.getAttribute("pad") || "false").ToBoolean();
    $.__sd = e.getAttribute("selectedclass") || "selected";
    //$.__ef = e.getAttribute("effect") || "none";
    $.__CS = null;

    var d = $.Text();
    if (d && d.IsDate()) {
        d = new DateTime(d);
    }
    else {
        d = DateTime.Now();
    }
    $.__D = d.Date();
    $.__M = d.Month();
    $.__Y = d.Year();
    $.OnDateChanged = new Event($);
    var prev = new Anchor().Text("<");
    var next = new Anchor().Text(">");
    prev.DOM.tabIndex = next.DOM.tabIndex = 1000000;

    t.Head.Rows.Add(new Row().HorizontalAlignment("center"));
    t.Head.Rows[0].Cells.AddRange([new Cell().AddElement(prev),
                                   new Cell().ColumnSpan(5),
                                   new Cell().AddElement(next)]);

    t.Rows.Add(new Row().HorizontalAlignment("center"));
    t.Rows[0].Cells.AddRange([new Header().Text("S"),
                              new Header().Text("M"),
                              new Header().Text("T"),
                              new Header().Text("W"),
                              new Header().Text("T"),
                              new Header().Text("F"),
                              new Header().Text("S")]);

    if (e.onselectstart !== undefined) {
        e.onselectstart = function (e) { return false; };
    }
    else {
        $.OnClick.Add(function (e) { e.Handled = e.CancelEvent = true; });
    }

    b = [];
    d = new Delegate($.__dd, $, [Delegate.Event]);
    for (i = 0; i < 6; i++) {
        a = [new Cell(),
             new Cell(),
             new Cell(),
             new Cell(),
             new Cell(),
             new Cell(),
             new Cell()];
        for (l = 0; l < 7; l++) {
            a[l].OnClick.Add(d);
        }
        v = new Row().HorizontalAlignment("center");
        v.Cells.AddRange(a);
        b.Add(v);
    }

    t.Rows.AddRange(b);

    prev.OnClick.Add(new Delegate($.__cm, $, [-1]));
    next.OnClick.Add(new Delegate($.__cm, $, [1]));
    $.OnFocus.Add(new Delegate($.Show, $));
    $.OnClick.Add(new Delegate($.Show, $));
    $.OnBlur.Add(new Delegate($.Hide, $));
    $.OnBlur.Add(new Delegate($._fd, $));
    $.OnKeyUp.Add(new Delegate($.Update, $));
    Page.OnClick.Add(new Delegate($.Hide, $));
    Page.AddElement($.__dp);
    $.Refresh();
};

// private event handlers
DatePicker.prototype._fd = function () {
    var t = this.Text();
    if (!t.IsDate()) {
        if ((t.length == 6 || t.length == 8) && t.IsInt()) {
            var m = t.Substring(0, 2).ToInt();
            var d = t.Substring(2, 4).ToInt();
            var y = t.Substring(4).ToInt();
            this.SelectedDate(new DateTime(y, m, d));
        }
    }
};

DatePicker.prototype.__cm = function (c) {
    var m = this.__M + c;
    if (m == 0) {
        m = 12;
        this.__Y--;
    }
    else if (m == 13) {
        m = 1;
        this.__Y++;
    }

    this.__M = m;
    this.Refresh();
};

DatePicker.prototype.__dd = function (e) {
    var t = e.Sender.Tag, s = e.Sender;
    if (t < 0) { return; }
    this.__D = t;
    if (this.__CS) {
        this.__CS.ClassName("");
    }
    this.__CS = s;
    s.ClassName(this.__sd);
    this.Text(new DateTime(this.__Y, this.__M, this.__D));
    this.Focus();
    this.Hide(true);
};


DatePicker.prototype.Show = function () {
    if (this.__fc) {
        this.__fc = false;
        return;
    }
    if (!this.__dp.Collapsed()) { return; }
    this.__dp.X(this.X()).Y(this.Y() + this.LayoutHeight()).Collapsed(false);
    // this.__ef.Play();
    return this;
};

DatePicker.prototype.Hide = function (f) {
    if ((this.IsFocused || this.__dp.IsMouseOver) && !f) {
        return;
    }

    if (this.__dp.Collapsed()) { return; }
    this.__fc = f;
    this.__dp.Collapsed(true);
    //this.__ef.Reverse();
    return this;

};

DatePicker.prototype.Update = function () {
    var t = this.Text();
    if (t.IsDate()) {
        var d = t.ToDateTime();
        this.__D = d.Date();
        this.__M = d.Month();
        this.__Y = d.Year();
        this.Refresh();
    }
    return this;

};

DatePicker.prototype.SelectedDate = function (d) {
    if (d === undefined) {
        var t = this.Text();
        if (t.IsDate()) {
            return t.ToDateTime();
        }

        return DateTime.Null;
    }

    if (d == null || d == DateTime.Null) {
        this.Text("");
    }
    else {
        this.Text(d.ToString());
    }
    this.Update();
    return this;
}

DatePicker.prototype.Refresh = function () {
    this.__dp.DOM.firstChild.$.Head.Rows[0].Cells[1].Text(DateTime.Months.GetName(this.__M) + " " + this.__Y);
    var tb = this.__dp.DOM.firstChild.$.Body;
    var r = 1;
    var d = new DateTime(this.__Y, this.__M, 1);
    var D = d.Date(), M = d.Month(), Y = d.Year();
    var Mx = DateTime.Months.GetDays(this.__M, this.__Y) + 1;
    var cDow = DateTime.Days.Sunday, dow = d.DayOfWeek();
    var i, j, c = tb.Rows[r], e = 1;
    var cD = d.Subtract(new TimeSpan(24 * dow - cDow, 0));
    for (i = 0; i < dow; i++) {
        if (this.__pd) {
            c.Cells[i].Text(cD.Date() + i).ClassName(this.__pc).Tag = -1;
        }
        else {
            c.Cells[i].Text("").ClassName(this.__pc).Tag = -1;
        }
    }

    var brk = false;
    for (j = r; j < 7;) {
        c = tb.Rows[r];
        c.Collapsed(false);
        for (; i < 7; i++) {
            c.Cells[i].Text(e).ClassName(this.__D == e ? this.__sd : "").Tag = e;
            if (this.__D == e) {
                this.__CS = c.Cells[i];
            }
            e++;
            if (e > Mx) {
                brk = true;
                break;
            }
        }

        if (brk) {
            break;
        }
        else {
            i = 0;
            j++, r++;
        }
    }

    e = 1;
    while (j < 7) {

        c = tb.Rows[r];
        if (i == 0) {
            c.Collapsed(true);
        }
        else {
            for (; i < 7; i++, e++) {
                if (this.__pd) {
                    c.Cells[i].Text(e).ClassName(this.__pc).Tag = -1;
                }
                else {
                    c.Cells[i].Text("").ClassName(this.__pc).Tag = -1;
                }
            }
        }
        i = 0;
        j++;
        r++;
    }
};
//#endregion

//#region Dialog
var DialogResult = LazyEnum({
    Ok: 0,
    Cancel: 1,
    Yes: 2,
    No: 3
});

Div.Extensions.Add(new Extension("dialog", Dialog));
var $Dialog = $Anchor;

function Dialog(e) {
    if (this.DOM === undefined) {
        return Dialog.Inherit(Dialog.Extend(new Div(e).ClassName("dialog")));
    }

    var $ = this;
    e = $.DOM;
    // $.__ef1 = new Effect(Dialog.Filter, e.getAttribute("effect") || "none", Dialog.Opacity, 0, Speed.Faster, Smoothness.Smoother);
    //$.__ef2 = new Effect(Dialog.Filter.T, e.getAttribute("effect") || "none", 1, 0, Speed.Faster, Smoothness.Smoother);

    if (e.parentNode) {
        e.parentNode.removeChild(e);
    };

    Dialog.Dialogs.AddElement(e);
    $.OnDialogShow = new Event($);
    $.OnDialogClose = new Event($);
    $.Result = null;
}

Dialog.CurrentDialog = null,
Dialog.Color = "black",
Dialog.Opacity = .5,
Dialog.ZIndex = 1000000,
Dialog.Filter = null;

Dialog.RemoveCurrent = function () {
    Dialog.Filter.T.Rows[0].Cells[0].RemoveElement(Dialog.CurrentDialog);
    Dialog.Dialogs.AddElement(Dialog.CurrentDialog);
}

Dialog.CloseCurrent = function (data) {
    var d = Dialog.CurrentDialog;
    if (d) {
        d.Result = data;
        if (d.OnDialogClose.Fire(new EventArgs(d, data)) != false) {
            Dialog.RemoveCurrent();
            Dialog.Filter.Collapsed(true);
            Dialog.Filter.T.Collapsed(true);
            Dialog.CurrentDialog = null;
        }
    }
}

Dialog.prototype.Show = function () {
    if (Dialog.CurrentDialog) {
        Dialog.RemoveCurrent();
    }
    Dialog.CurrentDialog = this;
    Dialog.Dialogs.RemoveElement(this);
    Dialog.Filter.Collapsed(false).T.Collapsed(false).Rows[0].Cells[0].AddElement(this);
    this.OnDialogShow.Fire();
    return this;

};

Dialog.prototype.Hide = function (data) {
    Dialog.CloseCurrent(data);
    return this;

};

NinJa.OnInitialization.Add(function () {
    Dialog.Dialogs = new Div().Collapsed(true);
    Page.AddElement(Dialog.Dialogs);
    Dialog.Filter = new Div().BackgroundColor(Dialog.Color).
                      Width("100%").
                      Height("100%").
                      Position("fixed").
                      X(0).
                      Y(0).
                      Collapsed(true);
    Dialog.Filter.T = new Table().
                      Width("100%").
                      Height("100%").
                      Position("fixed").
                      X(0).
                      Y(0).Collapsed(true);
    Dialog.Filter.T.Rows.Add(new Row().Height("100%"));
    Dialog.Filter.T.Rows[0].Cells.Add(new Cell().HorizontalAlignment("center").VerticalAlignment("middle").Height("100%"));
    Dialog.Filter.T.OnClick.Add(Dialog.CloseCurrent);
    Dialog.Filter.AddElement(Dialog.Dialogs);
    Dialog.Filter.Opacity(Dialog.Opacity);
    Page.AddElement(Dialog.Filter);
    Page.AddElement(Dialog.Filter.T);
});
//#endregion

//#region DynamiceSize
var DynamicSizeType = {
    Static: 0,
    Relative: 1,
    Liquid: 2
};

function DynamicSize(value) {
    this.Value = null;
    this.DynamicSizeType = DynamicSizeType.Liquid;
    this.Type = Type.DynamicSize;

    switch (value.Type) {
        case Type.String:
            if (value.EndsWith("%")) {
                this.Value = value.Remove("%").ToFloat() / 100;
                this.DynamicSizeType = DynamicSizeType.Relative;
            }
            else if (value == "*") {
                this.Value = null;
                this.DynamicSizeType = DynamicSizeType.Liquid;
            }
            else if (value.IsInt()) {
                this.Value = value.ToInt();
                this.DynamicSizeType = DynamicSizeType.Static;
            }
            break;

        case Type.Number:
            this.Value = value;
            this.DynamicSizeType = DynamicSizeType.Static;
            break;

    }
};

//#endregion

//#region one click
Anchor.Extensions.Add(new Extension("oneclick", OneClickAnchor));
Button.Extensions.Add(new Extension("oneclick", OneClickButton));
ContentButton.Extensions.Add(new Extension("oneclick", OneClickContentButton));


function OneClickAnchor(e) {
    if (this.DOM === undefined) {
        return OneClickAnchor.Inherit(OneClickAnchor.Extend(new Anchor(e).ClassName("oneclick")));
    }
    var $ = this;
    $.OnClick.Add(new Delegate($.Enabled, $, [false]));
}

function OneClickButton(e) {
    if (this.DOM === undefined) {
        return OneClickAnchor.Inherit(OneClickAnchor.Extend(new Button(e).ClassName("oneclick")));
    }
    var $ = this;
    this.Enabled = Element.prototype.Enabled;
    $.OnClick.Add(new Delegate($.Enabled, $, [false]));
}

function OneClickContentButton(e) {
    if (this.DOM === undefined) {
        return OneClickAnchor.Inherit(OneClickAnchor.Extend(new ContentButton(e).ClassName("oneclick")));
    }
    var $ = this;
    $.OnClick.Add(new Delegate($.Enabled, $, [false]));
}
//#endregion

//#region rollover
ImageElement.Extensions.Add(new Extension("rollover", RollOverImage));

$RollOverImage = $TextBox;

function RollOverImage(e) {
    if (this.DOM === undefined) {
        return RollOverImage.Inherit(RollOverImage.Extend(new ImageElement(e).ClassName("rollover")));
    }

    var $ = this;
    e = $.DOM;
    $.__H = e.getAttribute("hover") || "";
    $.__OS = ImageElement.prototype.Source;
    $.__MOv = new Delegate($.__OS, $, [$.__H])
    $.__MOu = new Delegate($.__OS, $, [e.src])
    if ($.__H != null) {
        $.OnMouseOver.Add($.__MOv);
        $.OnMouseOut.Add($.__MOu);
    }

    return e;
}

RollOverImage.prototype.Source = function (s) {
    if (s === undefined) {
        return this.__MOu.Parameters[0];
    }

    this.__MOu.Parameters[0] = s;
    if (!this.IsMouseOver) {
        this.src = s;
    }
    return this;
}

RollOverImage.prototype.HoverSource = function (s) {
    if (s === undefined) {
        return this.__MOv.Parameters[0];
    }
    this.__MOv.Parameters[0] = s;
    if (this.IsMouseOver) {
        this.src = s;
    }
    return this;
}
//#endregion

//#region ScrollBar
Type.ScrollBar = Type.$++;
Div.Extensions.Add(new Extension("scrollbar", ScrollBar));
$ScrollBar = $TextBox;

function HorizontalScrollBar(e) {
    var d = new Div().ClassName("scrollbarl").Attribute("direction", "horizontal");
    return ScrollBar.Inherit(ScrollBar.Extend(d));
}

function ScrollBar(e) {
    if (this.DOM === undefined) {
        return ScrollBar.Inherit(ScrollBar.Extend(new Div(e).ClassName("scrollbar")));
    }

    var $ = this;
    e = $.DOM;
    $.__Orient = e.getAttribute("direction") || "vertical";
    this.ClassName($.__Orient == "vertical" ? "vscrollbar" : "hscrollbar");

    $.__Width = Element.prototype.Width;
    $.__Height = Element.prototype.Height;
    $.Width = ScrollBar.prototype.Width;
    $.Height = ScrollBar.prototype.Height;
    var w, h;
    w = e.getAttribute("swidth") || $.__Orient == "horizontal" ? "100" : "15";
    h = e.getAttribute("sheight") || $.__Orient == "horizontal" ? "16" : "100";
    $.ClearTextNodes().Style(Style.Display, "inline-block").Style(Style.BoxSizing, "border-box").NaturalDisplay = "inline-block";
    if (w) {
        $.__Width(w.ToInt());
    }
    if (h) {
        $.__Height(h.ToInt());
    }

    var v = $.ElementsByClassName("decrease")[0];

    if (!v) {
        v = new Div();
        $.AddElement(v);
    }

    $.DecreaseThumb = v.ClassName("decrease thumb").Style(Style.BoxSizing, "border-box")
    v = $.ElementsByClassName("increase")[0];
    if (!v) {
        v = new Div();
        $.AddElement(v);
    }

    $.IncreaseThumb = v.ClassName("increase thumb")

    v = $.ElementsByClassName("track")[0];
    if (!v) {
        $.TrackThumb = TrackThumb.Inherit(TrackThumb.Extend(new Div()));
        $.TrackThumb.ClassName("track thumb");
    }
    else {
        $.TrackThumb = v.ClassName("track thumb")
        $.RemoveElement($.TrackThumb);
    }



    $.Track = new Div().Style(Style.BoxSizing, "border-box");
    $.InsertElement(1, $.Track);
    $.Track.AddElement($.TrackThumb);
    $.__Value = 0;
    if ($.__Orient == "horizontal") {
        $.IncreaseThumb.Style(Style.Display, "inline-block");
        $.DecreaseThumb.Style(Style.Display, "inline-block");
        $.Track.Style(Style.Display, "inline-block").Height(15);
        $.IncreaseThumb.Width(15).Height(16);
        $.DecreaseThumb.Width(15).Height(16);
        $.TrackThumb.Height(16);
    }
    else {
        $.IncreaseThumb.Width(15).Height(16);
        $.DecreaseThumb.Width(15).Height(16);
    }
    var max = (e.getAttribute("maxvalue") || "10").ToInt();

    $.Track.OnMouseWheel.Add(new Delegate($.__HandleScroll, $, [Delegate.Event]));
    $.Track.OnClick.Add(new Delegate($.__HandleTrackClick, $, [Delegate.Event]));
    var d = new Delegate($.Decrease, $);
    $.DecreaseThumb.OnClick.Add(d);
    $.DecreaseThumb.OnDoubleClick.Add(d);
    d = new Delegate($.Increase, $)
    $.IncreaseThumb.OnClick.Add(d);
    $.IncreaseThumb.OnDoubleClick.Add(d);
    $.__RefreshView();
    $.MaxValue(max);
    $.OnScrollChange = new Event();
    $.__Tb = 1;
    
}

ScrollBar.prototype.ThumbStepValue = function (v) {
    if (v === undefined) {
        return this.__Tb;
    }

    this.__Tb = v;
    return this;
};

ScrollBar.prototype.__HandleScroll = function (e) {
    this.Value(this.__Value + e.Clicks);
    e.Handled = true;
};


ScrollBar.prototype.__HandleTrackClick = function (e) {
    NinJa.Event.Handled = true;
    if (this.__Orient == "horizontal") {
        var x = Mouse.X - this.Track.X();
        if (x < this.TrackThumb.X()) {
            this.Value(this.__Value - this.TrackThumb.LayoutWidth());
        }
        else {
            this.Value(this.__Value + this.TrackThumb.LayoutWidth());
        }
    } else {
        var y = Mouse.Y - this.Track.Y();
        if (y < this.TrackThumb.Y()) {
            this.Value(this.__Value - this.TrackThumb.LayoutHeight());
        }
        else {
            this.Value(this.__Value + this.TrackThumb.LayoutHeight());
        }
    }
};

ScrollBar.prototype.Width = function (w) {
    if (w === undefined) {
        return this.__Width(w);
    }

    this.__Width(w);
    this.__RefreshView();
    this.MaxValue(this.__MaxValue);
    return this;
};

ScrollBar.prototype.Height = function (h) {
    if (h === undefined) {
        return this.__Width(h);
    }

    this.__Height(h);
    this.__RefreshView();
    this.MaxValue(this.__MaxValue);
    return this;
};

//change track thumb to position in the middle
ScrollBar.prototype.MaxValue = function (m) {
    if (m == undefined) {
        return this.__MaxValue;
    }

    var h;
    m = m < 0 ? 0 : m;
    if (m) {
        this.__MaxValue = m;
        if (this.__Orient == "horizontal") {
            h = this.Track.LayoutWidth() - m;
            if (h < 8) {
                this.TrackThumb.Width(8);
                this.__Step = (this.Track.LayoutWidth() - 8) / m;
            }
            else {
                this.TrackThumb.Width(h);
                this.__Step = 1;
            }
        }
        else {
            h = this.Track.LayoutHeight() - m;
            if (h < 8) {
                this.TrackThumb.Height(8);
                this.__Step = (this.Track.LayoutHeight() - 8) / m;
            }
            else {
                this.TrackThumb.Height(h);
                this.__Step = 1;
            }
        }
        if (this.__Value > this.__MaxValue) {
            this.__Value = this.__MaxValue;
        }
    }
    else {
        this.__Step = this.__Value = 0;
    }
    this.Refresh();
};

ScrollBar.prototype.Refresh = function () {
    if (this.__Orient == "horizontal") {
        this.TrackThumb.X(this.__Step * this.__Value);
    }
    else {
        this.TrackThumb.Y(this.__Step * this.__Value);
    }
};

ScrollBar.prototype.__RefreshView = function () {
    if (this.__Orient == "horizontal") {
        this.Track.Width(this.LayoutWidth() - (this.DecreaseThumb.LayoutWidth() + this.IncreaseThumb.LayoutWidth()));
    }
    else {
        this.Track.Height(this.LayoutHeight() - (this.DecreaseThumb.LayoutHeight() + this.IncreaseThumb.LayoutHeight()));
    }
};

ScrollBar.prototype.Value = function (value) {
    if (value === undefined) {
        return this.__Value;
    }

    this.__Value = value > this.__MaxValue ? this.__MaxValue : (value < 0 ? 0 : value);
    this.OnScrollChange.Fire(new EventArgs(this, this.__Value));
    this.Refresh();
    return this;
};

ScrollBar.prototype.Decrease = function () {
    NinJa.Event.Handled = true;
    this.Value(this.__Value - this.__Tb);
    return this;
}

ScrollBar.prototype.Increase = function () {
    NinJa.Event.Handled = true;
    this.Value(this.__Value + this.__Tb);
    return this;
}

function TrackThumb() {
    var $ = this;
    $.Style(Style.BoxSizing, "border-box").Position("relative");
    $.OnMouseDown.Add(new Delegate($.CaptureMove, $));
    $.TrackDelegate = new Delegate($.Move, $);
    $.TrackDelegate.Enabled = false;
    $.OnClick.Add(function (e) { e.Handled = true; });
    Page.OnMouseMove.Add($.TrackDelegate);
    Page.OnMouseUp.Add(new Delegate($.LoseMove, $));
}

TrackThumb.prototype.CaptureMove = function () {
    NinJa.Event.Handled = true;
    this.__X = this.X();
    this.__Y = this.Y();
    this.TrackDelegate.Enabled = true;
    this.Classes.Add("focus");
};

TrackThumb.prototype.LoseMove = function () {
    this.TrackDelegate.Enabled = false;
    this.Classes.Remove("focus");
};

TrackThumb.prototype.Move = function () {
    var s = this.DOM.parentNode.parentNode.$;

    if (s.__Orient == "horizontal") {
        var x = this.__X += Mouse.XChange;
        var v = x / s.__Step;
        s.Value(v.Round());
    }
    else {
        var y = this.__Y += Mouse.YChange;
        var z = y / s.__Step;

        s.Value(z.Round());
    }
};
//#endregion

//#region SuggestionBox
$SuggestionBox = $TextBox;
TextBox.Extensions.Add(new Extension("suggestion", SuggestionBox));

function SuggestionBox(e) {
    if (this.DOM === undefined) {
        return SuggestionBox.Inherit(SuggestionBox.Extend(new TextBox(e).ClassName("suggestion")));
    }

    var $ = this;
    e = $.DOM;
    e.setAttribute("autocomplete", "off");
    $.__dp = new Div().Position("absolute").Collapsed(true);
    $.__cs = e.getAttribute("displayclass") || "display";
    $.__FocusClass = (e.getAttribute("focusclass") || "focus");
    $.__Source = e.getAttribute("source") || null;
    $.__MinLength = (e.getAttribute("minlength") || "3").ToInt();
    $.__Text = (e.getAttribute("bindtext") || "");
    $.__SText = (e.getAttribute("selecttext") || $.__Text);
    $.__Value = (e.getAttribute("bindvalue") || "");
    $.__AnchorCache = [];
    $.__CurrentAnchors = [];
    $.__CurrentAnchor = null;
    $.__StopShow = false;
    $.__Header = (e.getAttribute("header") || "");
    $.OnSuggestionSelected = new Event($);

    if ($.__Source) {
        $.__Source = window[$.__Source];
    }

    Page.AddElement($.__dp);

    $.__dp.Style("overflow-y", "auto");
    $.__dp.Style("overflow-x", "hidden");
    $.Data = new Array(20);
    $.DisplayClass($.__cs);
    var d = new Delegate($.__HandleKeyDown, $, [Delegate.Event])
    $.__dp.OnKeyDown.Add(d);
    $.__CheckCache();
    $.Data = new ObservableArray($);
    $.OnSuggestionSelected = new Event($);
    $.OnFocus.Add(new Delegate($.__HandleKeyUp, $));
    $.OnBlur.Add(new Delegate($.HideSuggestions, $));
    $.OnKeyDown.Add(d);
    $.OnKeyUp.Add(new Delegate($.__HandleKeyUp, $, [Delegate.Event]));
    $.OnClick.Add(new Delegate($.__MuffleClick, $, [Delegate.Event]));
    $.__h = new Span().Text($.__Header);
    $.__dp.AddElement($.__h);
    $.__st = "";
    Page.OnClick.Add(new Delegate($.HideSuggestions, $));
}

SuggestionBox.prototype.__MuffleClick = function (e) {
    e.Handled = true;
};

SuggestionBox.prototype.Header = function (e) {
    if (e === undefined) {
        return this.__Header;
    }

    this.__Header = e;
    this.__h.Collapsed(e.length == 0).Text(this.__Header);
}

SuggestionBox.prototype.__CheckCache = function () {
    var a;
    while (this.Data.length > this.__AnchorCache.length) {
        a = new Anchor().Style(Style.Display, "block").Underline(false);
        a.OnClick.Add(new Delegate(this.__SelectData, this, [a]));
        this.__AnchorCache.Add(a);
    }
};

SuggestionBox.prototype.__HandleKeyDown = function (e) {
    e = $KeyEventArgs(e);
    switch (e.Key) {
        case Keys.Enter:
        case Keys.Tab:
            if (this.__CurrentAnchor) {
                this.SelectedData(this.__CurrentAnchor.Tag);
                e.Handled = true;
            }
            break;

        case Keys.DownArrow:
            if (this.__dp.Collapsed()) {
                this.ShowSuggestions();
            }
            this.__hiNext();
            break;

        case Keys.UpArrow:
            if (this.__dp.Collapsed()) {
                this.ShowSuggestions();
            }
            this.__hiPrevious();
            break;

    }
};

SuggestionBox.prototype.__HandleKeyUp = function (e) {
    if (this.__StopShow) {
        this.__StopShow = false;
        return;
    }

    if (e && (e.Key == Keys.UpArrow || e.Key == Keys.DownArrow)) {
        return;
    }

    if (this.Text().length >= this.__MinLength) {
        this.Update()
        if (this.Data.length > 0) {
            this.ShowSuggestions();
        }
        else {
            this.HideSuggestions(true);
        }
    } else {
        this.Bind([]);
        this.HideSuggestions(true);
    }
};

SuggestionBox.prototype.__SelectData = function (a) {
    this.SelectedData(a.Tag);
}

SuggestionBox.prototype.SelectedData = function (d) {
    var v;
    if (d === undefined) {
        return this.__sdData;
    }

    this.__sdData = d;
    v = NinJa.EvalBind(this.__SText, d);
    if (v !== undefined) {
        this.Text(v);
    }

    this.OnSuggestionSelected.Fire(new EventArgs(this, d));
    this.HideSuggestions(true);

    this.__StopShow = true;
    this.Update();
};

SuggestionBox.prototype.__hiNext = function () {
    if (this.__dp.Collapsed()) { return; }
    if (this.__CurrentAnchor) {
        if (this.__FocusClass) {
            this.__CurrentAnchor.Classes.Remove(this.__FocusClass);
        }
        else {
            this.__CurrentAnchor.BackgroundColor("").ForegroundColor("");
        }
    }

    var i = this.__CurrentAnchors.IndexOf(this.__CurrentAnchor);
    i++;
    if (i >= this.__CurrentAnchors.length) {
        i = 0;
    }
    else if (i == -1) {
        i = 0;
    }

    this.__CurrentAnchor = this.__CurrentAnchors[i];
    if (this.__FocusClass) {
        this.__CurrentAnchor.Classes.Add(this.__FocusClass);
    }
    else {
        this.__CurrentAnchor.BackgroundColor("#3399ff").ForegroundColor("#ffffff");
    }
    if (this.__dp.IsClipped(this.__CurrentAnchor)) {
        this.__dp.VerticalScrollToElement(this.__CurrentAnchor);
    }
};

SuggestionBox.prototype.__hiPrevious = function () {
    if (this.__dp.Collapsed()) { return; }
    if (this.__CurrentAnchor) {
        if (this.__FocusClass) {
            this.__CurrentAnchor.Classes.Remove(this.__FocusClass);
        }
        else {
            this.__CurrentAnchor.BackgroundColor("").ForegroundColor("");
        }
    }

    var i = this.__CurrentAnchors.IndexOf(this.__CurrentAnchor);
    i--;
    if (i < 0) {
        i = this.__CurrentAnchors.length - 1;
    }

    this.__CurrentAnchor = this.__CurrentAnchors[i];
    if (this.__FocusClass) {
        this.__CurrentAnchor.Classes.Add(this.__FocusClass);
    }
    else {
        this.__CurrentAnchor.BackgroundColor("#3399ff").ForegroundColor("#ffffff");
    }
    if (this.__dp.IsClipped(this.__CurrentAnchor)) {
        this.__dp.VerticalScrollToElement(this.__CurrentAnchor);
    }
};

SuggestionBox.prototype.DisplayClass = function (c) {
    if (c === undefined) {
        return this.__dp.ClassName();
    }

    this.__dp.ClassName(c);
    if (!c) {
        this.__dp.Style(Style.Border, "1px solid #000000").BackgroundColor(Colors.White).Height(200);
    }
    else {
        this.__dp.Style(Style.Border, "").BackgroundColor(Colors.Empty).Style(Style.Padding, "");
    }
    return this;
}

SuggestionBox.prototype.FocusClass = function (c) {
    if (c === undefined) {
        return this.__FocusClass;
    }

    this.__FocusClass = c;
    return this;
}

SuggestionBox.prototype.Source = function (s) {
    if (s === undefined) {
        return ths.__Source;
    }

    this.__Source = s;
    return this;
}

SuggestionBox.prototype.MinLength = function (m) {
    if (m === undefined) {
        return this.__MinLength;
    }

    this.__MinLength = m;
    return this;
}

SuggestionBox.prototype.ShowSuggestions = function () {
    if (!this.__StopShow) {
        if (this.Data.length > 0) {
            this.__dp.X(this.X()).Y(this.Y() + this.LayoutHeight());
            this.__dp.Width("").Collapsed(false).Width(this.__dp.LayoutWidth() + 17);
        }
    }

    return this;
};

SuggestionBox.prototype.HideSuggestions = function (f) {
    if (f === undefined) {
        if (this.__dp.IsMouseOver) {
            return;
        }
    }

    this.__dp.Collapsed(true);
    return this;
};

SuggestionBox.prototype.Update = function () {
    var data;

    if (this.__Source) {
        data = this.__Source(this.Text());

        if (data) {
            this.Bind(data);
        }
    }

    if (this.__CurrentAnchor) {
        if (this.__FocusClass) {
            this.__CurrentAnchor.Classes.Remove(this.__FocusClass);
        }
        else {
            this.__CurrentAnchor.BackgroundColor("").ForegroundColor("");
        }
        this.__CurrentAnchor = null;
    }

    return this;
}

SuggestionBox.prototype.Bind = function (data) {
    this.Data.BeginUpdate();
    this.Data.Clear();
    this.Data.AddRange(data);
    this.Data.EndUpdate();
    this.__CheckCache();
    this.Refresh();
    this.ShowSuggestions();
    return this;
};

SuggestionBox.prototype.BindText = function (t) {
    if (t === undefined) {
        return this.__Text;
    }

    this.__Text = t;
    return this;
}

SuggestionBox.prototype.BindValue = function (v) {
    if (v === undefined) {
        return this.__Value;
    }

    this.__Value = v;
    return this;
}

SuggestionBox.prototype.Refresh = function () {
    this.__dp.RemoveElements(this.__CurrentAnchors);

    this.__CurrentAnchors.Clear();
    var l = this.Data.length;
    var d = this.Data;
    var a, v;

    var text = this.__Text;
    var value = this.__Value;
    for (var i = 0; i < l; i++) {
        v = d[i];
        a = this.__AnchorCache[i];
        a.Classes.Clear();
        a.Content(NinJa.EvalBind(this.__Text, v) || "");
        a.Tag = v;

        this.__dp.AddElement(a);
        this.__CurrentAnchors.Add(a);
    }
};
//#endregion

//#region Template
$Template = $Anchor;
Type.Template = Type.$++;

Div.Extensions.Add(new Extension("template", Template));
function Template(e) {
    if (this.DOM === undefined) {
        return Template.Inherit(Template.Extend(new Div(e).ClassName("template")));
    }

    //if (e !== undefined) {
       this.Bind(null);
    //}
}

Template.prototype.TemplateNode = function (tp) {
    this.RemoveElements(Array.From(this.DOM.childNodes));
    this.AddElement(tp);
    this.Init();
}
Template.prototype.Init = function () {
    var a = this.__al = NinJaUI.__GetBindableNodes(this.DOM, []), k = a.length;
    this.__tp = [];
    for (var j = 0; j < k; j++) {
        this.__tp.push(a[j].nodeValue);
    }
}
Template.prototype.Bind = function (o) {
    o = o || {};
    var k;
    if (this.__tp === undefined) {
        this.Init();
    }

    var reg = /\{[A-Za-z\.]*}/i, property, a, b, v, w, x, y, c = this.__tp, l = c.length;
    for (var i = 0; i < l; i++) {
        v = c[i];
        w = this.__al[i];
        w.nodeValue = String.BindFormat(v, o);
    }

    this.Tag = o;
    this.BindData(o);
    return this;
};
//#endregion

//#region TemplateList
Div.Extensions.Add(new Extension("templatelist", TemplateList));

Type.TemplateList = "TemplateList";
$TemplateList = $Anchor;

function TemplateList(e) {
    if (this.DOM === undefined) {
        return TemplateList.Inherit(TemplateList.Extend(new Div(e).ClassName("templatelist")));
    }

    var $ = this;
    e = $.DOM;
    $.Items = new ObservableArray();
    $.Items.OnChange.Add(new Delegate($.ItemsChanged, $, [Delegate.Event]));
    $.__Template = new Div().AddElements(Array.From(e.childNodes)).DOM;
    $.ClearContent();
    $.EmptyText = new Div().ClassName("empty").Text("No items.").Collapsed(true);
    $.AddElement($.EmptyText);
    $.__S = $.Classes.Contains("sortable");
    $.OnSorted = new Event();
}

TemplateList.prototype.Bind = function (b) {
    this.Items.BeginUpdate().Clear().AddRange(b).EndUpdate();
    return this;
};

TemplateList.prototype.Commit = function () {
    var a = Array.From(this.DOM.childNodes).RemoveAt(0), l = a.length, i, o, n, v, u, w;
    for (i = 0; i < l; i++) {
        o = a[i].$.BuildObjectFromBinding();
        v = this.Items[i];
        for (n in o) {
            u = v[n];
            w = o[n];
            if (u !== undefined) {
                switch (u.Type) {
                    case Type.DateTime:
                        v[n] = w.IsDate() ? w.ToDateTime() : DateTime.Null;
                        break;

                    case Type.Number:
                        v[n] = w.IsInt() ? w.ToInt() : (w.IsFloat() ? w.ToFloat() : 0);
                        break;

                    default:
                        v[n] = w;
                        break;
                }
            }
            else {
                v[n] = w;
            }
        }
    }

    return this;
};

TemplateList.prototype.Loading = function (m) {
    this.Items.Clear();
    this.EmptyText.Text(m || "Loading...");
};

TemplateList.prototype.Refresh = function () {
    var a = Array.From(this.DOM.childNodes).RemoveAt(0), l = a.length, i;
    for (i = 0; i < l; i++) {
        a[i].$.Bind(this.Items[i]);
    }
};

TemplateList.prototype.ItemsChanged = function (e) {
    var t, o = e.Objects, l = o.length, i;
    switch (e.ModificationType) {
        case ModificationType.Add:
            for (i = 0; i < l; i++) {
                t = new Template();
                t.TemplateNode(NinJa.CloneNode(this.__Template));
                this.AddElement(t);
                o[i].__Index = i + e.Index;
                NinJa.WrapObjects(t.DOM);
                t.Bind(o[i]);
                if (this.__S) {
                    t.MakeDraggable();
                }
            }
            break;

        case ModificationType.Clear:
        case ModificationType.Remove:
            for (i = l - 1; i >= 0; i--) {
                this.RemoveElementAt(e.Index + i + 1);
            }
            break;

        case ModificationType.Move:
        case ModificationType.Swap:
        case ModificationType.Update:
            l = this.DOM.childNodes.length - 1;
            for (i = l - 1; i >= 0; i--) {
                this.RemoveElementAt(e.Index + i + 1);
            }
            l = o.length;
            for (i = 0; i < l; i++) {
                t = new Template();
                t.TemplateNode(NinJa.CloneNode(this.__Template));
                this.AddElement(t);
                NinJa.WrapObjects(t.DOM);;
                o[i].__Index = i;
                t.Bind(o[i]);
                if (this.__S) {
                    t.MakeDraggable();
                }
            }
            break;
    }

    this.EmptyText.Collapsed(this.Items.length !== 0).Text("No items");
};

Template.prototype.MakeDraggable = function () {
    var a, i, v, l;
    this.__M = new Delegate(this.MoveItem, this);
    Page.OnMouseMove.Add(this.__M);

    a = this.ElementsByClassName("handle");
    v = new Delegate(this.GrabItem, this);
    if (a.length > 0) {
        l = a.length;
        for (i = 0; i < l; i++) {
            a[i].OnMouseDown.Add(v);
        }
    }
    else {
        this.OnMouseDown.Add(v);
    }

    this.__N = new Delegate(this.DropItem, this);
    this.__N.Enabled = this.__M.Enabled = false;
    Page.OnMouseUp.Add(this.__N);
};


Template.prototype.GrabItem = function () {
    NinJa.Event.Handled = true;
    this.__N.Enabled = this.__M.Enabled = true;
    this.__X = Mouse.X;
    this.__Y = Mouse.Y;
    this._X = this.X();
    this._Y = this.Y();
    this.__BB = new Div().Size(new Size(this.LayoutWidth(), this.LayoutHeight()));
    this.Width(this.LayoutWidth()).Height(this.LayoutHeight());
    this.Position("absolute").X(this._X).Y(this._Y);
    this.Parent().InsertElementBefore(this.__BB, this);
    Page.Cursor(Cursor.Move);
};

Template.prototype.MoveItem = function () {
    this.X(this._X + (Mouse.X - this.__X));
    this.Y(this._Y + (Mouse.Y - this.__Y));

    var i, p = this.Parent(), a = Array.From(p.DOM.childNodes), l = a.length, v, x = Mouse.X, b, c = this.GetBounds(), y = c.Bottom;
    for (i = 0; i < l; i++) {
        v = a[i].$;
        b = v.GetBounds();
        if (b.Contains(x, y) && v !== this && v !== this.__BB) {
            if (c.Middle < b.Middle) {
                p.InsertElementBefore(this.__BB, v);
            }
            else {
                p.InsertElementAfter(this.__BB, v);
            }
        }
    }
};

Template.prototype.DropItem = function () {
    var p = this.Parent();
    this.__N.Enabled = this.__M.Enabled = false;
    this.Position("static");
    Page.Cursor(Cursor.Default);
    p.RemoveElement(this).InsertElementAfter(this, this.__BB).RemoveElement(this.__BB);
    var t = p.Items;
    t.BeginUpdate().Clear();
    var a = Array.From(p.DOM.childNodes), l = a.length, i;
    for (i = 1; i < l; i++) {
        t.push(a[i].$.Tag);
    }
    t.EndUpdate();
    if (p.OnSorted.length > 0) {
        p.OnSorted.Fire(new EventArgs(p, p.Items));
    }
};


//#endregion

//#region TemplateTableList
Table.Extensions.Add(new Extension("templatelist", TemplateTableList));

Type.TemplateList = "TemplateList";
$TemplateTableList = $Anchor;

function TemplateTableList(e) {
    if (this.DOM === undefined) {
        return TemplateTableList.Inherit(TemplateTableList.Extend(new Table(e).ClassName("templatelist")));
    }

    var $ = this;
    e = $.DOM;
    $.Items = new ObservableArray();
    $.Items.OnChange.Add(new Delegate($.ItemsChanged, $, [Delegate.Event]));
    //$.TemplateControls = new ObservableArray();
    $.__Template = NinJa.CloneNode($.Body.Rows[0].DOM);
    this.EmptyText = new Cell().ColumnSpan($.Rows[0].Cells.length);
    this.EmptyRow = new Row();
    this.EmptyRow.Cells.Add(this.EmptyText);
    $.Rows.Clear();

}

TemplateTableList.prototype.Bind = function (b) {
    this.Items.BeginUpdate().Clear().AddRange(b).EndUpdate();
};

TemplateTableList.prototype.Loading = function (m) {
    this.Items.Clear();
    this.EmptyText.Text(m || "Loading...");
};

TemplateTableList.prototype.Refresh = function () {
    var a = Array.From(this.Rows), l = this.Items.length, i;
    for (i = 0; i < l; i++) {
        a[i].Bind(this.Items[i]);
    }
};

TemplateTableList.prototype.ItemsChanged = function (e) {
    var t, o = e.Objects, l = o.length, i;
    this.Rows.Remove(this.EmptyRow);
    switch (e.ModificationType) {
        case ModificationType.Add:
            for (i = 0; i < l; i++) {
                t = new TemplateRow(NinJa.CloneNode(this.__Template));
                this.Rows.Insert(e.Index + i, t);
                o[i].__Index = i + e.Index;
                NinJa.WrapObjects(t.DOM);
                t.Bind(o[i]).BindData(o[i]);
            }
            break;

        case ModificationType.Clear:
            this.Rows.Clear();
            break;

        case ModificationType.Remove:
            for (i = l - 1; i >= 0; i--) {
                this.Rows.RemoveAt(e.Index + i);
            }
            break;

        case ModificationType.Update:
            this.Rows.Clear();

            for (i = 0; i < l; i++) {
                t = new TemplateRow(NinJa.CloneNode(this.__Template));
                this.Rows.Insert(e.Index + i, t);
                o[i].__Index = i;
                NinJa.WrapObjects(t.DOM);
                t.Bind(o[i]).BindData(o[i]);
            }
            break;
    }

    if (this.Items.length == 0) {
        this.Rows.Add(this.EmptyRow);
        this.EmptyText.Text("No items");
    }

};

TemplateTableList.prototype.Commit = function () {
    var a = this.Rows, l = a.length, i, o, n, v, u, w;
    for (i = 0; i < l; i++) {
        o = a[i].BuildObjectFromBinding();
        v = this.Items[i];
        for (n in o) {
            u = v[n];
            w = o[n];
            if (u !== undefined) {
                switch (u.Type) {
                    case Type.DateTime:
                        v[n] = w.IsDate() ? w.ToDateTime() : DateTime.Null;
                        break;

                    case Type.Number:
                        v[n] = w.IsInt() ? w.ToInt() : (w.IsFloat() ? w.ToFloat() : 0);
                        break;

                    default:
                        v[n] = w;
                        break;
                }
            }
            else {
                v[n] = w;
            }
        }
    }

    return this;
};


$TemplateRow = $Anchor;
Type.TemplateRow = Type.$++;

Row.Extensions.Add(new Extension("template", Template));
function TemplateRow(e) {
    if (this.DOM === undefined) {
        return TemplateRow.Inherit(TemplateRow.Extend(new Row(e).ClassName("template")));
    }

    if (e !== undefined) {
        this.Bind(null);
    }
}

TemplateRow.prototype.Bind = function (o) {
    o = o || {};
    var k;
    if (!this.Template) {
        this.Template = true;
        this.__all = NinJaUI.__GetBindableNodes(this.DOM, []);
        this.__nodeValues = [];
        k = this.__all.length;
        for (var j = 0; j < k; j++) {
            this.__nodeValues.push(this.__all[j].nodeValue);
        }
    }

    var reg = /\{[A-Za-z\.]*}/i, property, a, b, v, w, x, y, l = this.__all.length;
    for (var i = 0; i < l; i++) {
        v = this.__nodeValues[i];
        w = this.__all[i];
        w.nodeValue = String.BindFormat(v, o);
    }

    this.Tag = o;
    return this;
};

//#endregion

//#region helpers
NinJaUI.__GetBindableNodes = function (e, array) {
    var a = e.childNodes;
    var l = a.length;
    var v;
    for (var i = 0; i < l; i++) {
        v = a[i];
        if (v.nodeName != "#text") {
            var b = v.attributes, m = b.length;
            for (var j = 0; j < m; j++) {
                if (String.BindRegEx.exec(b[j].value)) {
                    array.push(b[j]);
                }
            }
        }
        else {
            if (String.BindRegEx.exec(v.nodeValue)) {
                array.push(v);
            }
        }
        NinJaUI.__GetBindableNodes(v, array);
    }

    return array;
}
//#endregion

//#region WaterMarkTextBox
TextBox.Extensions.Add(new Extension("watermark", WaterMarkTextBox));
$WaterMarkTextBox = $TextBox;

function WaterMarkTextBox(e) {
    if (this.DOM === undefined) {
        return WaterMarkTextBox.Inherit(WaterMarkTextBox.Extend(new TextBox(e).ClassName("watermark")));
    }

    var $ = this;
    e = $.DOM;
    $.Classes.Remove("watermark");
    $.__WaterMarkValue = e.getAttribute("watermarkvalue") || "";
    $.__WaterMarkColor = e.getAttribute("watermarkcolor") || "#c0c0c0";
    $.__Overlay = new Div().ForegroundColor($.__WaterMarkColor).Text($.__WaterMarkValue).Width($.LayoutWidth() - 8).Position("absolute").ClassName("watermark");
    $.__Overlay.OnClick.Add(new Delegate($.Focus, $));

    $.Parent().InsertElementBefore($.__Overlay, $);

    $.OnChange.Add(new Delegate($.__CheckValue, $))
    $.OnKeyUp.Add(new Delegate($.__CheckValue, $));
    $.__CheckValue();
    $.HasValue = false;
}

WaterMarkTextBox.prototype.__CheckValue = function () {
    this.__Overlay.Collapsed(this.Text().length > 0);
};

WaterMarkTextBox.prototype.WaterMarkValue = function (v) {
    if (v === undefined) {
        return this.__WaterMarkValue;
    }

    this.__WaterMarkValue = v;
    this.__CheckValue();
    return this;
};
//#endregion

//#region CheckBoxList
$CheckBoxList = $TextBox;

Span.Extensions.Add(new Extension("checkboxlist", CheckBoxList));
Type.CheckBoxList = Type.$++;

function CheckBoxList(e) {
    if (this.DOM === undefined) {
        return CheckBoxList.Inherit(CheckBoxList.Extend(new Span(e).ClassName("checkboxlist")));
    }

    var $ = this;
    e = $.DOM;
    $.Items = new ObservableArray($);
    $.SelectedItems = new ObservableArray($);
    var a = Array.From(e.childNodes), l = a.length, i, v;
    for (i = 0; i < l; i++) {
        v = a[i];
        if (v.tagName == "SPAN") {
            $.Items.Add(v.$);
            CheckBoxListItem.Inherit(CheckBoxListItem.Extend(v.$, v));
            v.$.Parent = this;
            if (v.$.Selected()) {
                $.SelectedItems.Add(v.$);
            }
        }
    }

    $.Items.OnChange.Add(new Delegate($.__UpdateItems, $, [Delegate.Event]));
    $.SelectedItems.OnChange.Add(new Delegate($.__SelectedItemsChanged, $, [Delegate.Event]));

    $.__Updating = false;

    $.OnChange = $.OnSelectionChanged = new Event($);

    var o = e.getAttribute("onchange");
    if (o) {
        $.OnSelectionChanged.Add(new Function(o));
    }

}

CheckBoxList.prototype.__UpdateItems = function (e) {
    var t, o = e.Objects, l = o.length, i, m = this;
    this.SelectedItems.BeginUpdate();
    switch (e.ModificationType) {
        case ModificationType.Add:
            m.AddElements(e.Objects);
            for (i = 0; i < l; i++) {
                e.Objects[i].Parent = this;
                if (e.Objects[i].Selected()) {
                    this.SelectedItems.Add(e.Objects[i]);
                }
            }
            break;

        case ModificationType.Clear:
        case ModificationType.Remove:

            this.SelectedItems.Remove(e.Objects);
            m.RemoveElements(e.Objects);
            for (i = 0; i < l; i++) {
                e.Objects[i].Parent = null;

            }
            break;

        case ModificationType.Update:
            m.RemoveElements(m.DOM.childNodes);
            m.AddElements(e.Objects);
            for (i = 0; i < l; i++) {
                e.Objects[i].Parent = this;
                if (e.Objects[i].Selected()) {
                    this.SelectedItems.Add(e.Objects[i]);
                }
            }
            break;
    }
    this.SelectedItems.EndUpdate(false)
};

CheckBoxList.prototype.__SelectedItemsChanged = function (e) {
    var d = e.Sender.Owner, t = d.SelectedItems, m = d.Items, l = m.length, i, v;

    for (i = 0; i < l; i++) {
        m[i].__Updating = true;
        m[i].Selected(t.Contains(m[i]));
        m[i].__Updating = false;
    }

    d.OnSelectionChanged.Fire(new EventArgs(d, d.SelectedItems));
};

CheckBoxList.prototype.__ItemChanged = function (c) {
    var e = this;
    if (e.__Updating) { return; }
    e.__Updating = true;
    if (c.Selected()) {
        e.SelectedItems.Add(c);
    }
    else {
        e.SelectedItems.Remove(c);
    }
    e.__Updating = false;
    e.OnSelectionChanged.Fire(new EventArgs(e, e.SelectedItems));
};


CheckBoxList.prototype.Value =
CheckBoxList.prototype.SelectedValue = function () {
    var s = "", i, t = this.SelectedItems, l = t.length;
    for (i = 0; i < l; i++) {
        if (s.length == 0) {
            s += t[i].Value();
        }
        else {
            s += "," + t[i].Value();
        }
    }

    return s;
};

function CheckBoxListItem(e) {
    if (this.DOM === undefined) {
        return CheckBoxListItem.Inherit(CheckBoxListItem.Extend(new Span(e)));
    }

    var $ = this;
    e = $.DOM;

    var a = Array.From(e.childNodes), l = a.length, i, v;

    for (i = 0; i < l; i++) {
        v = a[i];
        if (v.tagName == "INPUT" && v.type == "checkbox") {
            $.__cb = v.$;
            $.__Value = e.getAttribute("value") || "";
        }
        else if (v.tagName == "LABEL") {
            $.__lb = v.$;
        }
    }

    if ($.__cb === undefined) {
        $.__cb = new CheckBox("cbx" + CheckBoxListItem.IdGen++);
        $.__lb = new Label().For($.__cb.DOM.id);
        $.AddElements([$.__cb, $.__lb]);
    }

    $.__cb.OnCheckChanged.Add(new Delegate($.__np, $));
    $.Parent = null;
    $.__Updating = false;
}

CheckBoxListItem.IdGen = 0;
CheckBoxListItem.prototype.Selected = CheckBox.prototype.Checked;

CheckBoxListItem.prototype.Content = function (e) {
    if (e === undefined) {
        return this.__lb.Content();
    }

    this.__lb.Content(e);
    return this;
};

CheckBoxListItem.prototype.Text = function (e) {
    if (e === undefined) {
        return this.__lb.Text();
    }

    this.__lb.Text(e);
    return this;
};

CheckBoxListItem.prototype.Value = function (e) {
    if (e === undefined) {
        return this.__cb.DOM.value;
    }

    this.__cb.DOM.value = e;
    return this;
};

CheckBoxListItem.prototype.Selected = function (e) {
    if (e === undefined) {
        return this.__cb.Checked(e);
    }

    this.__cb.Checked(e);
    return this;
}

CheckBoxListItem.prototype.__np = function () {
    if (this.__Updating) { return; }
    if (!NullOrUndefined(this.Parent)) {
        var s = this.Parent.SelectedItems;
        s.BeginUpdate();
        if (this.Selected()) {
            s.Add(this);
        }
        else {
            s.Remove(this);
        }

        s.EndUpdate(false);
    }
};
//#endregion

//#region FloatBox
Div.Extensions.Add(new Extension("floatbox", FloatBox));

function FloatBox(e) {
    if (this.DOM === undefined) {
        return FloatBox.Inherit(FloatBox.Extend(new Div(e).ClassName("floatbox")));
    }

    var $ = this;
    e = $.DOM;
    Client.OnScroll.Add(new Delegate($.CheckFloatMode, $));
}

FloatBox.prototype.CheckFloatMode = function () {
    if (this.Style(Style.Position) == "fixed") {
        if (Client.VerticalScrollPosition() <= this.__OY) {
            this.Style(Style.Position, "");
        }
    }
    else {
        this.__OY = this.Y();
        this.__OW = this.Width();
        if (Client.VerticalScrollPosition() > this.Y()) {
            this.Style(Style.Position, "fixed").Y(0).Width(this.__OW);
        }
    }
};
//#endregion

//#region Tab/TabItem
$Tab = $TabItem = $TextBox;
Type.Tab = Type.$++;
Type.TabHeader = Type.$++;
Type.TabItem = Type.$++;

Div.Extensions.Add(new Extension("tab", Tab));

var TabLayout = {
    Top: "top",
    Bottom: "bottom",
    Left: "left",
    Right: "right"
};

function Tab(e) {
    if (this.DOM === undefined) {
        return Tab.Inherit(Tab.Extend(new Div(e).ClassName("tab")));
    }

    var $ = this;
    e = $.DOM;
    $.__si = null;
    $.Container = new Div().ClassName("tabcontainer").Height("100%");
    $.Header = new Div().ClassName("tabheaderpanel");
    $.TabItems = new ObservableArray(e);
    var c = Array.From(e.children), i, v, l = c.length, s, t;
    for (i = 0; i < l; i++) {
        v = c[i];
        if (v.tagName == "DIV") {
            v = TabItem.Inherit(TabItem.Extend(v.$));
            $.TabItems.Add(v);
            if (v.DOM.parentNode) {
                v.DOM.parentNode.removeChild(v.DOM);
            }
            if (v.Header.DOM.parentNode) {
                v.Header.DOM.parentNode.removeChild(v.Header.DOM);
            }
            $.Header.AddElement(v.Header);
            $.Container.AddElement(v);
        }
    }

    $.__TabLocation = (e.getAttribute("tablocation") || "top").toLowerCase();
    $.AddElements([$.Header, $.Container]);
    $.TabLocation($.__TabLocation);
    $.OnSelectionChanged = new Event();
    $.TabItems.OnChange.Add(new Delegate($.Update, $, [Delegate.Event]));

    var o = Client.Storage.Local.GetItem(Page.Href() + "_tab") || 0;
    $.SelectedItem($.TabItems[o]);
    this.Container.Style("min-height", this.Header.LayoutHeight() + "px");
}

Tab.prototype.Update = function (e) {

}

Tab.prototype.SelectedItem = function (t) {
    if (t === undefined) {
        return this.__si;
    }

    if (t == this.__si) { return; }
    if (this.__si) {
        this.__si.Header.Classes.Remove("selected");
        this.__si.Collapsed(true);
    }

    this.__si = t;
    this.__si.Header.Classes.Add("selected");
    this.__si.Collapsed(false);
    if (this.OnSelectionChanged.length > 0) {
        this.OnSelectionChanged.Fire(new EventArgs(this, this.__si));
    }

    if (t.OnSelected.length > 0) {
        t.OnSelected.Fire(new EventArgs(t));
    }

    Client.Storage.Local.SetItem(Page.Href() + "_tab", this.TabItems.IndexOf(t));
    return this;
};

Tab.prototype.TabLocation = function (l) {
    if (l === undefined) {
        return this.__TabLocation;
    }

    this.__TabLocation = l;
    this.RemoveElements([this.Header, this.Container]);
    var s;
    this.Header.Style(Style.Display, "inline-block").Style("vertical-align", "top");

    switch (l) {
        case "top":
            this.AddElements([this.Header, this.Container]);
            s = "inline-block";
            break;

        case "bottom":
            this.AddElements([this.Container, this.Header]);
            s = "inline-block";
            break;

        case "left":
            this.Container.Style(Style.Display, "inline-block").Style("vertical-align", "top").NaturalDisplay = "inline-block";
            this.AddElements([this.Header, this.Container]);
            s = "block";
            break;

        case "right":
            this.Container.Style(Style.Display, "inline-block").Style("vertical-align", "top").NaturalDisplay = "inline-block";
            this.AddElements([this.Container, this.Header]);
            s = "block";
            break;
    }

    var a = this.TabItems, l = a.length, i;
    for (i = 0; i < l; i++) {
        a[i].Header.Style(Style.Display, s).NaturalDisplay = s;
    }
};

function TabItem(e) {
    if (this.DOM === undefined) {
        return TabItem.Inherit(TabItem.Extend(new Div(e).ClassName("item")));
    }

    var $ = this;
    e = $.DOM;
    $.Style("zoom", "1");
    $.Header = $.ElementsByClassName("tabitemheader")[0];
    $.Classes.Add("tabitem");
    if (!$.Header) {
        $.Header = new TabHeader().Text(e.getAttribute("header") || "");
    }
    else {
        TabHeader.Inherit(TabHeader.Extend($.Header));
    }

    $.OnSelected = new Event($);
    $.NaturalDisplay = "inline-block";
    $.Style("vertical-align", "top");
    $.__OEnabled = Element.prototype.Enabled;
    $.Header.OnClick.Add(new Delegate($.Selected, $, [true]));
    $.Collapsed(true);
}

TabItem.prototype.Enabled = function (e) {
    if (e === undefined) {
        return this.__Enabled;
    }

    this.__OEnabled(e);
    this.Header.Enabled(e);
}

TabItem.prototype.Selected = function (s) {
    var p = this.DOM.parentNode.parentNode.$;
    if (!p) { return; }
    if (s === undefined) {
        return this == p.__si;
    }

    if (s === true) {
        if (p.__si != this) {
            p.SelectedItem(this);
        }
    }
    else {
        if (p.__si == this) {
            p.SelectedItem(null);
        }
    }
};

TabItem.prototype.Shown = function (s) {
    if (s === undefined) {
        return !this.Header.Collapsed();
    }

    if (this.Selected()) {
        this.Collapsed(!s);
    }
    this.Header.Collapsed(!s);
    return this;
}

function TabHeader(e) {
    if (this.DOM === undefined) {
        return TabHeader.Inherit(TabHeader.Extend(new Div(e).ClassName("tabitemheader")));
    }
}
//#endregion

//#region Menu
Type.MenuItem = Type.$++;
Type.Menu = Type.$++;
Type.ContextMenu = Type.$++;
Type.MenuCheckItem = Type.$++;
Type.MenuIcon = Type.$++;

NinJa.Mapper.Add("MENU", List);
List.Extensions = [new Extension("menu", Menu), new Extension("contextmenu", ContextMenu)];

var MenuLayout = {
    Vertical: "vertical",
    Horizontal: "horizontal"
}

$MenuCheckItem = $ContextMenu = $Menu = $MenuItem = $Anchor;

function Menu(e) {
    if (this.DOM === undefined) {
        return Menu.Inherit(Menu.Extend(new List(e).ClassName("menu")));
    }
    var $ = this;
    e = this.DOM;
    //$.ClearTextNodes();
    $.__ChildClass = e.getAttribute("submenuclass") || "submenu";
    $.__SafeClip = (e.getAttribute("safeclip") || "false").ToBoolean();
    $.__Icons = (e.getAttribute("showicons") || "false").ToBoolean();
    if ($.__SafeClip === undefined) {
        if (e.parentNode.parentNode !== null) {
            $.__SafeClip = e.parentNode.parentNode.$.__SafeClip !== undefined ? e.parentNode.parentNode.$.__SafeClip.toString() : "true";
        }
        else {
            $.__SafeClip = "true";
        }
    }
    else {
        $.__SafeClip = "true";
    }

    $.__SafeClip = $.__SafeClip.ToBoolean();
    $.Items = new ObservableArray($);
    $.IsRoot = !e.parentNode || e.parentNode.tagName != "LI";

    var isCtx = $.Classes.Contains("contextmenu");

    var y, z;
    y = e;
    z = e.parentNode;
    if (z) {
        while (z.tagName == "MENU" || z.tagName == "LI") {
            y = z;
            z = z.parentNode;
        }
    }

    $.Root = y.$;
    $.ParentItem = null;
    $.__Layout = e.getAttribute("layout") || ($.IsRoot && !isCtx ? MenuLayout.Horizontal : MenuLayout.Vertical);
    $.Style(Style.PaddingLeft, "0px").Style(Style.Margin, "0px").Style("zoom", "1").Style(Style.Display, "inline-block").Style(Style.ListStyleType, "none");
    $.__ShowDelegate = new Delegate($.Show, $);
    $.__HideDelegate = new Delegate($.Hide, $, [true]);
    $.__HideDelegate2 = new Delegate($.__Hide, $);
    $.__HideDelegate3 = new Delegate($.Hide, $);

    if (!$.IsRoot) {
        $.NaturalDisplay = "block";
        $.ParentItem = e.parentNode.$;
        $.OnMouseOut.Add($.__HideDelegate2);
        Page.OnClick.Add($.__HideDelegate3);
        $.Style(Style.ZIndex, NinJaUI.ZIndex++)
    }
    else if (isCtx) {
        $.NaturalDisplay = "block";
        Page.OnClick.Add($.__HideDelegate3);
        $.Style(Style.ZIndex, NinJaUI.ZIndex++)
    }
    else {
        $.NaturalDisplay = "inline-block";
    }


    if (!isCtx) {
        $.__HideTimer = new Timer(100, false);
        $.__ShowTimer = new Timer(100, false);
        $.__HideTimer.OnTrigger.Add(new Delegate($.Hide, $));
        $.__ShowTimer.OnTrigger.Add(new Delegate($.Show, $));
    }

    var m, a = Array.From(e.children), v, l = a.length, i;
    for (i = 0; i < l; i++) {
        v = a[i];
        if (v.tagName == "LI") {
            v = v.$;
            if (v.Classes.Contains("check")) {
                m = MenuCheckItem.Inherit(MenuCheckItem.Extend(v));
                if ($.IsRoot && !isCtx) {
                    m.Icon.Collapsed(true);
                }

                if (!m.__Submenu) {
                    m.OnClick.Add($.__HideDelegate);
                }
            }
            else if (v.Classes.Contains("separator")) {
                m = new Separator();
                m.ParentMenu = $;
                e.replaceChild(m.DOM, v.DOM);
            }
            else {
                m = MenuItem.Inherit(MenuItem.Extend(v));
                if ($.IsRoot && !isCtx) {
                    m.Icon.Collapsed(true);
                }

                if (!m.__Submenu) {
                    m.OnClick.Add($.__HideDelegate);
                }
            }

            v.Style("display", $.__Layout == MenuLayout.Horizontal ? "inline-block" : "block").Style("zoom", "1");
            $.Items.Add(m);
        }
    }

    $.Items.OnChange.Add(new Delegate($.__ItemsChanged, $, [Delegate.Event]));

    if (e.onselectstart !== undefined) {
        e.onselectstart = function (e) { return false; };
    }
    else {
        $.OnClick.Add(function (e) { e.Handled = true; e.CancelEvent = true; });
    }

    $.OnOpening = new Event();
    $.OnClosing = new Event();
}

Menu.prototype = new Content(null);
Menu.prototype.constructor = Menu;

function ContextMenu(e) {
    if (e === undefined || e.Type == Type.String) {
        return ContextMenu.Inhert(ContextMenu.Extend(new Element("menu", e).ClassName("contextmenu")));
    }

    var $ = this;
    $.DOM = e;
    Menu.Inherit($, e);
    $.__ShowDelegate.Function = $.Show;
    $.__HideDelegate.Function = $.__HideDelegate3.Function = $.Hide;
    $.__HideDelegate2.Function = $._Hide
    $.Position("fixed").Style(Style.ZIndex, NinJaUI.ZIndex++).Collapsed(true);
}

ContextMenu.__Current = null;
ContextMenu.prototype.__ItemsChanged =
Menu.prototype.__ItemsChanged = function (e) {
    var d = e.Sender.Owner.DOM, o = e.Objects, l = o.length, c = Array.From(d.children), lc = c.length, a, b, p, i, v;
    switch (e.ModificationType) {
        case ModificationType.Add:
            for (i = 0; i < l; i++) {
                v = o[i];
                if (e.Index >= lc) {
                    d.$ap(v.DOM);
                }
                else {
                    d.$ib(v.DOM, c[e.Index++]);
                }

                v.Icon.Collapsed(this.IsRoot);
                v.ParentMenu = this;
                v.Style(Style.Display, this.__Layout != MenuLayout.Vertical ? "inline-block" : "block").Style("zoom", "1");
                if (v.Type != Type.Separator) { v.OnClick.Add(this.__HideDelegate); }
            }
            break;

        case ModificationType.Remove:
        case ModificationType.Clear:
            for (i = 0; i < l; i++) {
                v = o[i];
                d.$rc(v.DOM);
                v.ParentMenu = null;
                if (v.Type != Type.Separator) {
                    v.OnClick.Remove(this.__HideDelegate);
                }
            }
            break;

        case ModificationType.Update:
            for (i = 0; i < lc; i++) {
                v = c[i];
                d.$rc(v.DOM);
                v.ParentMenu = null;
                v.Icon.Collapsed(this.IsRoot);
                if (v.Type != Type.Separator) {
                    v.OnClick.Remove(this.__HideDelegate);
                }
            }

            for (i = 0; i < l; i++) {
                v = o[i];
                d.$ap(v.DOM);
                v.ParentMenu = this;
                v.Style(Style.Display, this.__Layout != MenuLayout.Vertical ? "inline-block" : "block").Style("zoom", "1");
                if (v.Type != Type.Separator) { v.OnClick.Add(this.__HideDelegate); }
            }
            break;

        case ModificationType.Swap:
            a = o[0].DOM;
            b = o[1].DOM;
            p = $d.createTextNode("beep");
            d.$ib(p, a);
            d.$.$rc(a);
            d.$ib(a, b);
            d.$.$rc(b);
            d.$ib(b, p);
            d.$.$rc(p);
            delete p;
            break;

        case ModificationType.Move:
            a = o[0].DOM;
            p = $d.createTextNode("meep");
            d.$ib(p, a);
            d.$rc(a);
            e.Index;
            if (e.Index >= lc) {
                d.$ap(a);
            }
            else {
                d.$ib(a, c[e.Index]);
            }
            d.$rc(p);
            delete p;
            break;
    }
}

Menu.prototype.__Show = function () {
    this.__ShowTimer.Stop();
    this.__HideTimer.Stop();
    if (this.ParentItem.ParentMenu) {
        if (this.ParentItem.ParentMenu.__HideTimer) {
            this.ParentItem.ParentMenu.__HideTimer.Stop();
        }
    }

    this.__ShowTimer.Start();
}

Menu.prototype.__Hide = function () {
    this.__HideTimer.Stop();
    this.__ShowTimer.Stop();
    this.__HideTimer.Start();
}

Menu.prototype.Show = function () {
    if (!this.Collapsed()) { return; }
    if (this.ParentItem.ParentMenu.IsRoot && this.ParentItem.ParentMenu.__Layout != "vertical") {
        this.X(this.ParentItem.X()).Y(this.ParentItem.Y() + this.ParentItem.LayoutHeight());
    }
    else {
        this.X(this.ParentItem.X() + this.ParentItem.LayoutWidth()).Y(this.ParentItem.Y());
    }

    if (this.OnOpening.Fire(new EventArgs(this))) {
        this.Visible(false).Collapsed(false);

        if (this.__SafeClip) {
            if (this.IsClipped(Client)) {
                if (this.ParentItem.ParentMenu.IsRoot) {
                    this.SnapTo(this.ParentItem, Side.Bottom, Alignment.Right, Aspect.Outside);
                }
                else {
                    this.SnapTo(this.ParentItem, Side.Left, Alignment.Top, Aspect.Outside);
                }
            }
        }

        this.Visible(true).Collapsed(false);

        if (!this.ParentItem.Classes.Contains("active")) {
            this.ParentItem.Classes.Add("active");
        }
    }
}

Menu.prototype.Hide = function (forced) {
    if (this.Collapsed() || this.IsRoot) { return; }
    if ((this.IsMouseOver || this.ParentItem.IsMouseOver) && !forced) { return; }

    if (!forced) {
        if (Menu.CheckChildren(this)) { return; }
    }

    if (this.OnClosing.Fire(new EventArgs(this))) {
        this.Collapsed(true);

        if (!this.ParentItem.ParentMenu.IsRoot) {
            this.ParentItem.ParentMenu.Hide(forced);
        }
    }

    this.ParentItem.Classes.Remove("active");
}

Menu.CheckChildren = function (m) {
    var a = m.Items, l = a.length, i, v;
    for (i = 0; i < l; i++) {
        v = a[i];
        if (v.__Submenu) {
            if (v.__Submenu.IsMouseOver) {
                return true;
            }
            if (Menu.CheckChildren(v.__Submenu)) {
                return true;
            }
        }
    }

    return false;
}

Menu.prototype.Layout = function (x) {
    if (x === undefined) {
        return this.__Layout;
    }

    this.__Layout = x;
    var a = this.Items, l = a.length, i;
    for (i = 0; i < l; i++) {
        a[i].Style(Style.Display, x == MenuLayout.Horizontal ? "inline-block" : "block").Style("zoom", "1");
    }
}

ContextMenu.prototype.Show = function () {
    var e = NinJa.Event;
    this.X(Mouse.ClientX + 2);
    this.Y(Mouse.ClientY + 2);

    if (this.OnOpening.Fire(new EventArgs(this))) {
        this.Visible(false).Collapsed(false);
        if (this.__SafeClip) {
            if (this.IsClipped(Client)) {
                this.SnapTo(Client, Side.Right);
            }
            if (this.IsClipped(Client)) {
                this.SnapTo(Client, Side.Bottom);
            }
        }

        this.Visible(true).Collapsed(true);

    }

    if (ContextMenu.__Current && ContextMenu.__Current != this) {
        ContextMenu.__Current.Hide(true);
    }

    ContextMenu.__Current = this;
    e.CancelEvent = true;
    e.Handled = true;
}

ContextMenu.prototype.Hide = function (forced) {
    if (this.Collapsed()) { return; }
    if ((this.IsMouseOver || (this.ParentItem ? this.ParentItem.IsMouseOver : false)) && !forced) { return; }

    if (!forced) {
        if (Menu.CheckChildren(this)) { return; }
    }

    if (this.OnClosing.Fire(new EventArgs(this))) {
        this.Collapsed(true);
        if (this.ParentItem) {
            this.ParentItem.ParentMenu.Hide(forced);
        }
    }

    ContextMenu.__Current = null;
}

function MenuItem(e) {
    if (this.DOM === undefined) {
        return MenuItem.Inherit(MenuItem.Extend(new ListItem(e)));
    }

    var $ = this;
    e = $.DOM;
    var en = (e.getAttribute("enable") || "true").ToBoolean(), a, l, i, v, s = e.getAttribute("src") || "";
    $.__Href = e.getAttribute("href");
    $.__Submenu = null;
    $.__Enabled = (e.getAttribute("enable") || "true").ToBoolean();
    $.__MoreIcon = new Span().Text("►").Style(Style.Float, "right").Collapsed(true);

    if (!e.firstChild) {
        e.appendChild(document.createTextNode(""));
    }

    $.TextNode = e.firstChild;
    $.ParentMenu = e.parentNode.$;
    $.Icon = new MenuIcon().Source(s);
    if ($.ParentMenu.Root.__Icons) {
        $.InsertElement(0, $.Icon)
    }
    $.InsertElement(0, $.__MoreIcon);

    a = Array.From(e.children);
    l = a.length;
    for (i = 0; i < l; i++) {
        v = a[i];
        if (v.tagName == "MENU") {
            $.Submenu(Menu.Inherit(Menu.Extend(v.$)));
        }
    }

    if (!$.__Enabled) {
        $.Enabled(false);
    }

    if ($.__Href) {
        $.OnClick.Add(new Delegate(Page.Href, Page, [$.__Href]));
    }
}
MenuItem.prototype = new Content(null);
MenuItem.constructor = MenuItem;
MenuCheckItem.prototype = new Content(null);
MenuCheckItem.constructor = MenuCheckItem;

MenuCheckItem.prototype.Enabled =
MenuItem.prototype.Enabled = function (e) {
    if (e === undefined) {
        return this.__Enabled;
    }

    this.__Enabled = e;
    if (this.__Submenu) {
        if (!this.__ParentMenu.IsRoot && this.__ParentMenu.__Layout == "vertical") {
            this.__MoreIcon.Collapsed(!e);
        }
        this.__SubmenuDel.Enabled = e;
    }

    this.Opacity(this.__Enabled ? 1 : .5);
    return this;
}

MenuCheckItem.prototype.Text =
MenuItem.prototype.Text = function (t) {
    if (t === undefined) {
        return this.TextNode;
    }

    this.TextNode.nodeValue = t;
    return this;
}

MenuCheckItem.prototype.Submenu =
MenuItem.prototype.Submenu = function (s) {
    var m = this.__Submenu;
    if (s === undefined) {
        return this.__Submenu;
    }

    if (m) {
        m.Classes.Remove(m.Root.__ChildClass);
        this.OnClick.Remove(m.__ShowDelegate);
    }

    if (s.ParentItem) {
        var p = s.ParentItem;
        p.OnMouseOver.Remove(p.__SubmenuDel);
        p.OnMouseOut.Remove(s.__HideDelegate2);
        p.OnClick.Remove(s.__ShowDelegate);
        p.OnMouseOver.Remove(s.ParentItem.__SubmenuDel);
    }

    this.__Submenu = s;
    if (s) {
        if (!this.ParentMenu.IsRoot && this.ParentMenu.__Layout == "vertical") {
            this.__MoreIcon.Collapsed(false);
        }
        s.ParentItem = this;
        s.Position("absolute");
        s.Collapsed(true);
        s.Root = this.ParentMenu.Root;
        s.IsRoot = false;
        s.Classes.Add(s.Root.__ChildClass);
        s.Layout(MenuLayout.Vertical);
        Page.AddElement(s);

        this.__SubmenuDel = new Delegate(s.__Show, s)
        this.OnMouseOver.Add(this.__SubmenuDel);
        this.OnMouseOut.Add(s.__HideDelegate2);
        this.OnClick.Add(s.__ShowDelegate);

        s.Collapsed(true);
        s.IsRoot = false;
        s.Root = this.ParentMenu.Root;

        s.Items.ForEach(function (i) {
            if (i.Icon) {
                i.Icon.Collapsed(false);
            }
        });
    }
    else {
        this.__MoreIcon.Collapsed(true);
        this.OnClick.Add(this.ParentMenu.__HideDelegate);
    }
}

function MenuCheckItem(e) {
    if (this.DOM === undefined) {
        return MenuCheckItem.Inherit(MenuCheckItem.Extend(new ListItem(e)));
    }
    var $ = this;
    e = this.DOM;
    MenuItem.Inherit($, e);
    $.__Checked = false;
    $.OnCheckChanged = new Event();
    $.OnClick.Add(new Delegate($.__Toggle, $));
    var c = e.getAttribute("checked");
    if (c) {
        $.Checked(c.ToLower() == "true");
    }

    if (e.onselectstart !== undefined) {
        e.onselectstart = function (e) { return false; };
    }
    else {
        $.OnClick.Add(function (e) { e.Handled = e.CancelEvent = true; });
    }
}

MenuCheckItem.prototype.__Toggle = function () {
    this.Checked(!this.__Checked);
}

MenuCheckItem.prototype.Checked = function (c) {
    if (c === undefined) {
        return this.__Checked;
    }

    this.__Checked = c;
    this.Icon.Visible(this.__Checked);
    this.OnCheckChanged.Fire(new EventArgs(this));
    return this;
}

Element.prototype.ContextMenu = function (c) {
    if (this.__CurrentContextMenu) {
        this.OnContextMenu.Remove(this.__CurrentContextMenu.__ShowDelegate);
    }

    this.__CurrentContextMenu = c;
    this.OnContextMenu.Add(this.__CurrentContextMenu.__ShowDelegate);
}

function MenuIcon(e) {
    if (this.DOM === undefined) {
        return MenuIcon.Inherit(MenuIcon.Extend(new ImageElement(e)));
    }
    var $ = this;
    $.Width(16).Height(16);
    $.Visible(false);
}

MenuIcon.prototype = new ImageElement(null);
MenuIcon.constructor = MenuIcon;

MenuIcon.prototype.Source = function (s) {
    if (s == undefined) {
        return this.src;
    }

    this.src = s;
    this.Visible(!String.IsNullOrEmpty(s));
    return this;
}

Type.Separator = "Separator";
function Separator(e) {
    if (e === undefined) {
        e = document.createElement("hr");
    }
    var $ = this;
    $.DOM = e;
    $.ParentMenu = null;
}

Separator.prototype.Collpased = Element.prototype.Collapsed;
Separator.prototype.Visible = Element.prototype.Visible;
Separator.prototype.Style = Element.prototype.Style;

//#endregion

TextBox.Extensions.Add(new Extension("taglist", TagList));
var $TagList = $TextArea;

function TagList() {
    if (this.DOM === undefined) {
        return TagList.Inherit(TagList.Extend(new TextBox(e)));
    }

    var $ = this;
    $.Items = new ObservableArray(this);
    $.Items.OnChange.Add(new Delegate(this.ItemsChanged, this, [Delegate.Event]));
    $.Container = new Div().ClassName("taglist");
    $.ClassName("");
    $.Parent().InsertElementBefore($.Container, $).RemoveElement($);
    $.OnKeyDown.Add(new Delegate(this.HandleKey, this));
    $.Container.AddElement($);
    $.__O = $.Attribute("layout") == "vertical" ? "block" : "inline-block";
    $.__S = ($.Attribute("sortable") || "false").ToBoolean();
}

TagList.prototype.HandleKey = function () {
    var e = NinJa.Event, k = e.Key;
    switch (k) {
        case Keys.Enter:
        case Keys.Tab:
            e.Handled = this.AddItem(this.Text());
            this.Clear();
            break;

        case Keys.Delete:
        case Keys.Backspace:
            if (this.Text().length == 0) {
                this.RemoveItem(this.Items.Last());
            }
            break;
    }
}

TagList.prototype.AddItem = function (t) {
    if (t.length == 0) { return false; }
    if (this.Items.Contains(t)) {
        this.Items.Remove(t);
    }
    this.Items.Add(t);
    return true;
};

TagList.prototype.RemoveItem = function (t) {
    this.Items.Remove(t);
    return this;
};

TagList.prototype.Value = function (v) {
    if (v === undefined) {
        return this.Items;
    }

    if (v.Type == Type.String) {
        v = v.Split(TagList.Delimeter);
    }
    this.Items.BeginUpdate().Clear().AddRange(v).EndUpdate();
    return this;
}

TagList.prototype.ItemsChanged = function (e) {
    var s, a, o = e.Objects, l = o.length, i;
    switch (e.ModificationType) {
        case ModificationType.Add:
            for (i = 0; i < l; i++) {
                a = new Anchor();
                a.OnClick.Add(new Delegate(this.RemoveItem, this, [o[i]]));
                s = new Span().Text(o[i]).ClassName("tag").Style("display", this.__O);
                if (TagList.DeleteIcon == null) {
                    a.Text(TagList.DeleteCharacter);
                }
                else {
                    a.AddElement(new ImageElement().Source(TagList.DeleteIcon));
                }

                s.InsertElement(1, a);
                if (this.__S) {
                    a = new Anchor().Text(this.__O == "block" ? TagList.DownIcon : TagList.RightIcon);
                    a.OnClick.Add(new Delegate(this.MoveItemForward, this, [o[i]]));
                    s.InsertElement(1, a);

                    a = new Anchor().Text(this.__O == "block" ? TagList.UpIcon : TagList.LeftIcon);
                    a.OnClick.Add(new Delegate(this.MoveItemBack, this, [o[i]]));
                    s.InsertElement(1, a);
                }

                this.Container.InsertElementBefore(s, this);
            }
            break;

        case ModificationType.Clear:
        case ModificationType.Remove:
            for (i = l - 1; i >= 0; i--) {
                this.Container.RemoveElementAt(i + e.Index);
            }
            break;

        case ModificationType.Move:
        case ModificationType.Swap:
            this.Container.SwapElements(this.Container.DOM.childNodes[e.Index], this.Container.DOM.childNodes[e.Index2]);
            break;

        case ModificationType.Update:
            l = this.Container.DOM.childNodes.length - 1;
            for (i = l - 1; i >= 0; i--) {
                this.Container.RemoveElementAt(i + e.Index);
            }

            l = this.Items.length;
            for (i = 0; i < l; i++) {
                a = new Anchor();
                a.OnClick.Add(new Delegate(this.RemoveItem, this, [o[i]]));
                s = new Span().Text(o[i]).ClassName("tag").Style("display", this.__O);
                if (TagList.DeleteIcon == null) {
                    a.Text(TagList.DeleteCharacter);
                }
                else {
                    a.AddElement(new ImageElement().Source(TagList.DeleteIcon));
                }

                s.InsertElement(1, a);

                if (this.__S) {
                    a = new Anchor().Text(this.__O == "block" ? TagList.DownIcon : TagList.RightIcon);
                    a.OnClick.Add(new Delegate(this.MoveItemForward, this, [o[i]]));
                    s.InsertElement(1, a);

                    a = new Anchor().Text(this.__O == "block" ? TagList.UpIcon : TagList.LeftIcon);
                    a.OnClick.Add(new Delegate(this.MoveItemBack, this, [o[i]]));
                    s.InsertElement(1, a);
                }

                this.Container.InsertElementBefore(s, this);
            }
            break;
    }
};

TagList.prototype.MoveItemBack = function (x) {
    this.Items.ShiftLeft(this.Items.IndexOf(x));
};

TagList.prototype.MoveItemForward = function (x) {
    this.Items.ShiftRight(this.Items.IndexOf(x));
};


TagList.DeleteIcon = null;
TagList.DeleteCharacter = "☓";
TagList.Delimeter = ",";
TagList.UpIcon = "▲";
TagList.DownIcon = "▼";
TagList.LeftIcon = "◀";
TagList.RightIcon = "▶";
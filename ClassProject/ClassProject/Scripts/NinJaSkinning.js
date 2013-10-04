﻿///<reference path="~/scripts/NinJa.js" />
///<reference path="~/scripts/NinJaVisuals.js" />

var OldDropDownList = DropDownList;
var OldCheckBox = CheckBox;
DropDownList = SkinnedListConstructor;
CheckBox = SkinnedBoxConstructor;
SkinnedList.IconPadding = 16;

function SkinnedListConstructor(e) {
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("select", e);
    }

    SkinnedList.Inherit(SkinnedList.Extend(OldDropDownList.New(e)));
}

NinJa.OnInitialization.Add(function () {
    NinJa.Mapper["SELECT"] = SkinnedListConstructor;
    NinJa.Mapper["checkbox"] = SkinnedBoxConstructor;
});

SkinnedListConstructor.Extensions = OldDropDownList.Extensions;

function SkinnedList(e) {
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateElement("select", e);
    }

    var b;
    this.DOM.style.display = "none";

    this.Text = e = new Anchor().Style(Style.Display, "inline-block").ClassName("select " + this.ClassName());
    this.Display = new Div().ClassName("select").Position("absolute").Collapsed(true).Style(Style.ZIndex, NinJaVisuals.ZIndex++);
    this.Parent().InsertElementBefore(e, this);
    this.Parent().InsertElementBefore(this.Display, this);
    this.Options.OnChange.Add(new Delegate(this.UpdateOptions, this));
    this.OnSelectionChanged.Add(new Delegate(this.UpdateValue, this));
    this.Text.NaturalDisplay = "inline-block";
    this.Text.DOM.tabIndex = 0;
    this.UpdateOptions();
    this.UpdateValue();
    this.Text.OnMouseDown.Add(new Delegate(this.Text.Focus, this.Text));
    this.Text.OnFocus.Add(new Delegate(this.ShowList, this));
    this.Text.OnBlur.Add(new Delegate(this.Display.Collapsed, this.Display, [true]));
}

SkinnedList.prototype.Collapsed = function (e) {
    if (e === undefined) {
        return this.Text.Collapsed();
    }

    if (e === false) {
        this.UpdateDisplay();
    }

    this.Text.Collapsed(e);
    return this;
};

SkinnedList.prototype.Enabled = function (e) {
    return this.Text.Enabled(e);
};

SkinnedList.prototype.ShowList = function () {
    this.Display.X(this.Text.X()).Y(this.Text.Y() + this.Text.LayoutHeight()).Collapsed(false);
    if (this.Display.IsClipped(Client)) {
        this.Display.Y(this.Text.Y() - this.Display.LayoutHeight()).Collapsed(false);
    }
};

SkinnedList.prototype.SelectOption = function (o) {
    this.SelectedValue(o);
};

SkinnedList.prototype.UpdateOptions = function () {
    var v = this.Visible(), c = this.Collapsed(), d;
    this.Display.ClearContent();
    var a = this.Options, l = a.length, i;
    for (i = 0; i < l; i++) {
        d = new Div().Text(a[i].Text());
        this.Display.AddElement(d);
        d.OnMouseDown.Add(new Delegate(this.SelectOption, this, [a[i].Value()]));
        d.OnMouseDown.Add(new Delegate(this.Text.Focus, this.Text));
    }

    this.UpdateDisplay();
    this.UpdateValue();
};

SkinnedList.prototype.UpdateDisplay = function () {
    this.Display.Visible(false).Collapsed(false);
    this.Text.Width(this.Display.Width() + SkinnedList.IconPadding);
    this.Display.Collapsed(true).Visible(true);
};

SkinnedList.prototype.UpdateValue = function () {
    var t = this.SelectedText() || "&nbsp;&nbsp;&nbsp;&nbsp;";
    if (t.length == 0) {
        t = "&nbsp;";
    }

    this.Text.Content(t);
}

function SkinnedBoxConstructor(e) {
    if (e === undefined || e.Type == Type.String) {
        e = NinJa.CreateInput("checkbox", e);
    }

    SkinnedCheckBox.Inherit(SkinnedCheckBox.Extend(OldCheckBox.New(e)));
}


SkinnedBoxConstructor.Extensions = OldCheckBox.Extensions;

function SkinnedCheckBox(e) {
    this.Display = new Anchor().ClassName("checkbox");
    this.Display.DOM.tabIndex = 0;
    this.Image = new ImageElement().Source(this.DOM.getAttribute("src"));
    this.Display.AddElement(this.Image);
    this.Display.OnClick.Add(new Delegate(this.ClickBase, this));
    this.Parent().InsertElementBefore(this.Display, this);
    this.DOM.style.display = "none";
    this.OnCheckChanged.Add(new Delegate(this.Update, this));
    this.Update();
}

SkinnedCheckBox.prototype.ClickBase = function () {
    this.Checked(!this.Checked());
};

SkinnedCheckBox.prototype.Update = function () {
    this.Image.Visible(this.Checked());
}

SkinnedCheckBox.prototype.Collapsed = function (e) {
    if (e !== undefined) {
        this.Display.Collapsed(e);
        return this;
    }

    return this.Display.Collapsed(e)
};

SkinnedCheckBox.prototype.Enabled = function (e) {
    if (e !== undefined) {
        this.Display.Enabled(e);
        return this;
    }

    return this.Enabled.Collapsed(e)
};
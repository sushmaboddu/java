function BlueRectangle() {
    let gw = GWindow(500, 200);
    let rect = GRect(150, 50, 200, 100);
    rect.setColor("Blue");
    rect.setFilled(true);
    gw.add(rect);
}
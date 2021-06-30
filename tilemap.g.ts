// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100020000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010202020202020201010101010101010101010101010101010101010101010101010101010101010101020101010101010101010101010101010201010101010101010101010101010102020101010101010101010101010101020101010101010101010101010101010201010101010101010101010101010102010101010101010102020202020101020202010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010202020201010101010101010101010101010101010101010101020101010101010101010101010101010201010101010101010101010101010202010101010101010101010101010102010101010101010101010101010101020101020201010101010101010101010201010101010101010101010101010102010101010101010101010101010101020101010101010101010101010101010201010101010201010101010101010102010101010101010101010101010101020101010101010102010101010102020202020202020202020202020202`, img`
................
................
................
.........2222222
................
................
..2.............
..2.............
..22............
..2.............
..2.............
..2........22222
..222...........
................
................
.......2........
................
................
.........2222...
................
...2............
...2............
..22............
..2.............
..2..22.........
..2.............
..2.............
..2.............
..2.....2.......
..2.............
..2.......2.....
2222222222222222
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.floorLight0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

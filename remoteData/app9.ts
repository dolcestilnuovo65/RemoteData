class PistonFactory implements IRemoteDataFactory {
    newObject(): Piston {
        return new Piston(0,'',2);
    }
}

// class Piston extends RemoteCursor
class Piston extends RemoteData{
    made: string = "";
    length: number = 0;

    constructor(id:number,made:string,lenght:number) {
        super(id + '');
        this.made = made;
        this.length = lenght;
        this.__isDBFS = true;

    }
    public get made_() {
        return this.made;
    }
}

//     var n = d.getUTCHours()*10000000 + d.getUTCMinutes()*100000 + d.getUTCSeconds()* 1000 + d.getUTCMilliseconds();


class EngineL extends LocalData {
    cv: number = 0;
    type: string = "";

    /*piston0: Piston = new Piston("steal", 12);
    piston1: Piston = new Piston("steal/ads", 13);
    piston2: Piston = new Piston("iron", 14);
    piston3: Piston = new Piston("iron", 14);
    */
    pistons = new RemoteCollection<Piston>("pistons", "fiat", new PistonFactory());

    // pistons: Piston = new Piston(); 
    //pistons = new Array(0);


    constructor() {
        super('Sofim');
        //  this.pistons.add(new Piston("steal", 12));
        //this.pistons.add(new Piston("steal/ads", 13));
        //this.pistons.add(new Piston("iron", 14));
        //this.pistons.add(new Piston("iron", 14));

        this.pistons.Add(new Piston(1, "iron", 12));
        this.pistons.Add(new Piston(2, "iron", 12));
        this.pistons.Add(new Piston(3, "steal", 12));
        this.pistons.Add(new Piston(4, "steal", 12));
        //       this.pistons.save();
        //this.pistons[0] = new Piston("iron", 12);
        //this.pistons[1] = new Piston("steal/ads", 13);
        //this.pistons[2] = new Piston("special steal", 14);
        //this.pistons[3] = new Piston("iron", 14);

        // supponiamo invece
        // 

    }





    /** 
    
            this.pistons[0] = new Piston("steal", 12);
            this.pistons[1] = new Piston("steal/ads", 13);
            this.pistons[2] = new Piston("iron", 14);
            this.pistons[3] = new Piston("iron", 14);
    
    
    */


}



class Engine extends RemoteData{
    cv: number = 0;
    type: string = "";

    /*piston0: Piston = new Piston("steal", 12);
    piston1: Piston = new Piston("steal/ads", 13);
    piston2: Piston = new Piston("iron", 14);
    piston3: Piston = new Piston("iron", 14);
    */
    pistons = new RemoteCollection<Piston>("pistons", "fiat", new PistonFactory());
            
    // pistons: Piston = new Piston(); 
    //pistons = new Array(0);


    constructor() {
        super('Sofim');
        //  this.pistons.add(new Piston("steal", 12));
        //this.pistons.add(new Piston("steal/ads", 13));
        //this.pistons.add(new Piston("iron", 14));
        //this.pistons.add(new Piston("iron", 14));

        this.pistons.Add(new Piston(1,"iron", 12));
        this.pistons.Add(new Piston(2,"iron", 12));
        this.pistons.Add(new Piston(3,"steal", 12));
        this.pistons.Add(new Piston(4,"steal", 12));
 //       this.pistons.save();
        //this.pistons[0] = new Piston("iron", 12);
        //this.pistons[1] = new Piston("steal/ads", 13);
        //this.pistons[2] = new Piston("special steal", 14);
        //this.pistons[3] = new Piston("iron", 14);

        // supponiamo invece
        // 

    }





/** 

        this.pistons[0] = new Piston("steal", 12);
        this.pistons[1] = new Piston("steal/ads", 13);
        this.pistons[2] = new Piston("iron", 14);
        this.pistons[3] = new Piston("iron", 14);


*/


}


class Camper extends RemoteData {


    make: string= "";
    model: string = "";
    type: string = "";
    year: string = "";
    color: string = "";
    engine = new Engine();
    constructor(id?:string){
          super(id);

//        this.engine.cv = 144;
//        this.engine.type = "diesel";
////        this.engine.save();
          
    }
    public print() {
        alert("I'm a car");
    }


}

class CamperL extends LocalData {


    make: string = "";
    model: string = "";
    type: string = "";
    year: string = "";
    color: string = "";
    engine = new EngineL();
    constructor(id?: string) {
        super(id);

        //        this.engine.cv = 144;
        //        this.engine.type = "diesel";
        ////        this.engine.save();

    }
    public print() {
        alert("I'm a car");
    }


}


function printAll(list:Printable[]){
    for (var elem in list)
        list[elem].print(); 

}



function onload1() {

    function saved() {
        alert('END SAVING');
    }

    try {

   





        var camper = new Camper('Daily4x4');

        camper.make = "Iveco";
        camper.model = "Daily 4x4";
        camper.type = "";
        camper.year = "1989";
        camper.color = "red";

        camper.save();

        var sdf = JSON.stringify(camper.toJSON())

        var camper1 = new Camper();

        camper1.fetchData('Daily4x4');

        //camper.save(() => alert('SAVED'));
        //camper.save(() => saved());
        //camper.save(() => function () {
        //    alert('END SAVING');
        //});    
        // alert("Saving async");

        /*
            var dbfsRows: string = camper.getDbfsRows();
        
            var DBFSRemote = new DBFSFile(camper.id, dbfsRows);
        
            DBFSRemote.save();
        
          */


        //        var camper1: Camper = new Camper("D611452A-FA78-3E0D-F699-F586D96D98B8");
        //alert(camper.model);
        //alert(camper.engine.cv);
        //camper.engine.pistons[0];
//        camper.engine.pistons.id = "4ABC2D61-B641-0E79-D0D3-6D5364D27A48";

//        camper.engine.pistons.getPage(1);

//        alert(camper.engine.pistons.GetItem(1));

    }
    catch (ex) {
        alert(ex);
    }

};

function windowOnload()  {

    let data = [{ "url": "http://localhost:8080/ESecure/ESecure", "instance": "c:/aladinsearch/lab/TS", "database": "ADVSec", "classStorageName": "Camper", "virtualPath": "/Camper", "parentId": "", "id": "9F886896-8031-25C1-C519-9000A321868C", "isBackboneModel": true, "isArray": false, "isArrayElement": false, "isCollection": false, "make": "Iveco", "model": "Daily 4x4", "type": "", "year": "1989", "color": "red", "engine": { "id": "25FD520C-DBD7-EB9F-3E97-25E4FAD79418", "isArray": false, "virtualPath": "/Camper/Engine" } }, { "url": "http://localhost:8080/ESecure/ESecure", "instance": "c:/aladinsearch/lab/TS", "database": "ADVSec", "classStorageName": "Camper", "virtualPath": "/Camper", "parentId": "", "id": "14582899-4EAE-145D-F6F5-C1147A273FA4", "isBackboneModel": true, "isArray": false, "isArrayElement": false, "isCollection": false, "make": "Iveco", "model": "Daily 4x4", "type": "", "year": "1989", "color": "red", "engine": { "id": "5AB33847-E35C-39BB-A845-BB42666C4058", "isArray": false, "virtualPath": "/Camper/Engine" } }, { "url": "http://localhost:8080/ESecure/ESecure", "instance": "c:/aladinsearch/lab/TS", "database": "ADVSec", "classStorageName": "Camper", "virtualPath": "/Camper", "parentId": "", "id": "A7AFFEAE-E4BA-6421-3228-32D1FD770281", "isBackboneModel": true, "isArray": false, "isArrayElement": false, "isCollection": false, "make": "Iveco", "model": "Daily 4x4", "type": "", "year": "1989", "color": "red", "engine": { "id": "B462801B-2B7E-AB21-A331-3D4A05EDFD0D", "isArray": false, "virtualPath": "/Camper/Engine" } }];
    let model1 = { "url": "http://localhost:8080/ESecure/ESecure", "instance": "c:/aladinsearch/lab/TS", "database": "ADVSec", "classStorageName": "Camper", "virtualPath": "/Camper", "parentId": "", "id": "9F886896-8031-25C1-C519-9000A321868C", "isBackboneModel": true, "isArray": false, "isArrayElement": false, "isCollection": false, "make": "Iveco", "model": "Daily 4x4", "type": "", "year": "1989", "color": "red", "engine": { "id": "25FD520C-DBD7-EB9F-3E97-25E4FAD79418", "isArray": false, "virtualPath": "/Camper/Engine" } };
    try {


        //var campers = new RemoteBackBoneCollection(data);

        //let camp1 = campers.get('1');

        //let camperL = new CamperL();
        //camperL.make = "Unimog";
        //camperL.model = "T4500";
        //camperL.type = "";
        //camperL.year = "1980";
        //camperL.color = "green";
        //camperL.id = '1';
        //camperL.save();

        //let camperL1 = new CamperL('1');
        //camperL1.fetchData();


        //let camper = new Camper();

        ////camper.set('make', "Iveco");
        ////camper.set('model', "Daily 4x4");
        ////camper.set('type', "4x4");
        ////camper.set('year', "1989");
        ////camper.set('color', "red");

        //camper.make = "Iveco";
        //camper.model = "Daily 4x4";
        //camper.type = "";
        //camper.year = "1989";
        //camper.color = "red";
        //camper.id = '1';
        //camper.init();

        //campers.add(camper);

        //let camper1 = new Camper();


        //camper1.make = "Iveco";
        //camper1.model = "Daily 4x4";
        //camper1.type = "";
        //camper1.year = "1989";
        //camper1.color = "red";
        //camper1.id = '2';
        //camper1.init();

        //campers.add(camper1);


        //let camper2 = new Camper();


        //camper2.make = "Iveco";
        //camper2.model = "Daily 4x4";
        //camper2.type = "";
        //camper2.year = "1989";
        //camper2.color = "red";
        //camper2.id = '3';
        //camper2.init();

        //campers.add(camper2);
        //campers.url = "http://localhost:8080/ESecure/ESecure";
        //campers.save();




    }
    catch (ex) {
        alert(ex);
    }

};



window.onload = () => {
    var camper = new Camper('Daily4x4');
    camper.isContainer = true;

    camper.make = "Iveco";
    camper.model = "Daily 4x4";
    camper.type = "";
    camper.year = "1989";
    camper.color = "red";

    camper.save();

    let camper1 = new Camper('Daily4x4');
    camper1.isContainer = true;
    camper1.init();
    camper1.fetchData();


}
import React from "react";
import Icono from "../../Assets/icono-email.png";
import Icono2 from "../../Assets/icono-instagram.png";
import Icono3 from "../../Assets/icono-localizacion.png";
import Icono4 from "../../Assets/icono-watsapp.png";
import Link from "../NetworksLink/NetworksLink";

function Networks() {
  return (
    <div className="flex items-center">
      <div className="inline-block mr-2 w-10">
        <Link
          image={Icono}
          href={"mailto:geisonm161@gmail.com"}
        />
      </div>
      <div className="inline-block mr-2 w-10">
        <Link
          image={Icono2}
          href={"https://www.instagram.com/yei_serigrafia/?hl=es-la"}
        />
      </div>
      <div className="inline-block mr-2 w-10">
        <Link
          image={Icono3}
          href={"https://maps.app.goo.gl/HHh5N7nK4pYgFxrMA"}
        />
      </div>
      <div className="inline-block mr-2 w-10">
        <Link
          image={Icono4}
          href={"https://api.whatsapp.com/send?phone=8498600600"}
        />
      </div>
    </div>
  );
}

export default Networks;

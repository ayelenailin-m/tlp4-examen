export default function DemoSingleton() {
  class Configuracion {
    private static instancia: Configuracion;
    private valores: { [clave: string]: any } = {};

    private constructor() {}

    public static obtenerInstancia(): Configuracion {
      if (!Configuracion.instancia) {
        Configuracion.instancia = new Configuracion();
      }
      return Configuracion.instancia;
    }

    public set(clave: string, valor: any): void {
      this.valores[clave] = valor;
    }

    public get(clave: string): any {
      return this.valores[clave];
    }
  }
  const conf1 = Configuracion.obtenerInstancia();
  const conf2 = Configuracion.obtenerInstancia();
  conf1.set("modo", "producción");
  console.log(conf2.get("modo"));
}

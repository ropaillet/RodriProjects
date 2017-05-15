      
      /*
      ACTION is CREATE Table Categorias
      */

CREATE TABLE Categorias (
       cate_codigo          char(4) NOT NULL,
       cate_descripcion     char(50) NULL
)
go


ALTER TABLE Categorias
       ADD PRIMARY KEY CLUSTERED (cate_codigo)
go

      
      /*
      ACTION is CREATE Table Formula
      */

CREATE TABLE Formula (
       form_codigo          char(4) NOT NULL,
       form_descripcion     char(30) NULL,
       form_calculo         char(255) NULL
)
go


ALTER TABLE Formula
       ADD PRIMARY KEY CLUSTERED (form_codigo)
go

      
      /*
      ACTION is CREATE Table Codigos_concepto
      */

CREATE TABLE Codigos_concepto (
       codc_codigo          char(4) NOT NULL,
       codc_formula         char(4) NOT NULL,
       codc_descripcion     char(30) NULL,
       codc_tipo            char(1) NULL
)
go


ALTER TABLE Codigos_concepto
       ADD PRIMARY KEY CLUSTERED (codc_codigo)
go

      
      /*
      ACTION is CREATE Table Cuentas_contables
      */

CREATE TABLE Cuentas_contables (
       ccon_cuenta          char(15) NOT NULL,
       ccon_detalle         char(30) NULL
)
go


ALTER TABLE Cuentas_contables
       ADD PRIMARY KEY CLUSTERED (ccon_cuenta)
go

      
      /*
      ACTION is CREATE Table Grupos_convenios
      */

CREATE TABLE Grupos_convenios (
       grup_codigo          char(4) NOT NULL,
       grup_descripcion     char(50) NULL
)
go


ALTER TABLE Grupos_convenios
       ADD PRIMARY KEY CLUSTERED (grup_codigo)
go

      
      /*
      ACTION is CREATE Table provincia
      */

CREATE TABLE provincia (
       prov_codigo          char(4) NOT NULL,
       prov_descripcion     char(50) NULL
)
go


ALTER TABLE provincia
       ADD PRIMARY KEY CLUSTERED (prov_codigo)
go

      
      /*
      ACTION is CREATE Table tipo_documento
      */

CREATE TABLE tipo_documento (
       tdoc_codigo          char(3) NOT NULL,
       tdoc_descripcion     char(50) NULL
)
go


ALTER TABLE tipo_documento
       ADD PRIMARY KEY CLUSTERED (tdoc_codigo)
go

      
      /*
      ACTION is CREATE Table Legajos
      */

CREATE TABLE Legajos (
       lega_legajo          char(11) NOT NULL,
       lega_apellido        char(30) NOT NULL,
       lega_provincia       char(4) NOT NULL,
       lega_tipo_document   char(3) NOT NULL,
       lega_nombre          char(30) NULL,
       lega_calle           char(30) NULL,
       lega_numero          char(5) NULL,
       lega_piso            char(10) NULL,
       lega_departamento    char(3) NULL,
       lega_obs_domicilio   char(30) NULL,
       lega_localidad       char(40) NULL,
       lega_telefono        char(20) NULL,
       lega_nro_documento   char(8) NOT NULL,
       lega_cuil            char(13) NOT NULL,
       lega_limite_credit   decimal(12,2) NULL,
       lega_fecha_ingreso   smalldatetime NULL,
       lega_fecha_egreso    smalldatetime NULL,
       lega_sexo            char(1) NOT NULL,
       lega_estado_civil    char(1) NULL
)
go


ALTER TABLE Legajos
       ADD PRIMARY KEY CLUSTERED (lega_legajo)
go

      
      /*
      ACTION is CREATE Table Legajo_grupo
      */

CREATE TABLE Legajo_grupo (
       legr_grupo           char(4) NOT NULL,
       legr_legajo          char(11) NOT NULL,
       legr_categoria       char(4) NULL,
       legr_cuenta          char(15) NOT NULL,
       legr_fecha_ingreso   smalldatetime NULL,
       legr_fecha_egreso    smalldatetime NULL
)
go


ALTER TABLE Legajo_grupo
       ADD PRIMARY KEY CLUSTERED (legr_grupo, legr_legajo)
go

      
      /*
      ACTION is CREATE Table Liquidacion
      */

CREATE TABLE Liquidacion (
       liqi_numero          char(6) NOT NULL,
       liqi_descripcion     char(255) NULL,
       liqi_fecha_firme     smalldatetime NULL,
       liqi_mes_pago        char(2) NULL,
       liqi_anio_pago       char(4) NULL,
       liqi_anio            char(4) NULL,
       liqi_mes             char(2) NULL
)
go


ALTER TABLE Liquidacion
       ADD PRIMARY KEY CLUSTERED (liqi_numero)
go

      
      /*
      ACTION is CREATE Table Liquidacion_legajo
      */

CREATE TABLE Liquidacion_legajo (
       lleg_grupo           char(4) NOT NULL,
       lleg_legajo          char(11) NOT NULL,
       lleg_cod_concepto    char(4) NOT NULL,
       lleg_cantidad        int NULL,
       lleg_importe         decimal(15,5) NULL,
       lleg_fech_desde      smalldatetime NULL,
       lleg_fech_hasta      smalldatetime NULL,
       lleg_desc_personal   char(30) NULL,
       lleg_importe_calc    decimal(15,5) NULL
)
go


ALTER TABLE Liquidacion_legajo
       ADD PRIMARY KEY CLUSTERED (lleg_grupo, lleg_legajo, 
              lleg_cod_concepto)
go

      
      /*
      ACTION is CREATE Table Prestamos
      */

CREATE TABLE Prestamos (
       pres_grupo           char(4) NOT NULL,
       pres_legajo          char(11) NOT NULL,
       pres_numero          int NOT NULL,
       pres_monto           decimal(12,2) NULL,
       pres_cant_cuotas     int NULL,
       pres_nro_cuota       int NULL,
       pres_fecha           smalldatetime NULL,
       pres_val_cuota       decimal(12,2) NULL
)
go


ALTER TABLE Prestamos
       ADD PRIMARY KEY CLUSTERED (pres_grupo, pres_legajo, 
              pres_numero)
go

      
      /*
      ACTION is CREATE Table Recibos
      */

CREATE TABLE Recibos (
       reci_grupo           char(4) NOT NULL,
       reci_legajo          char(11) NOT NULL,
       reci_cod_concepto    char(4) NOT NULL,
       reci_liqi_numero     char(6) NOT NULL,
       reci_cant            int NULL,
       reci_importe         decimal(15,5) NULL,
       reci_nro_recibo      char(8) NULL
)
go


ALTER TABLE Recibos
       ADD PRIMARY KEY CLUSTERED (reci_grupo, reci_legajo, 
              reci_cod_concepto, reci_liqi_numero)
go


ALTER TABLE Codigos_concepto
       ADD FOREIGN KEY (codc_formula)
                             REFERENCES Formula  (form_codigo)
go


ALTER TABLE Legajos
       ADD FOREIGN KEY (lega_provincia)
                             REFERENCES provincia  (prov_codigo)
go


ALTER TABLE Legajos
       ADD FOREIGN KEY (lega_tipo_document)
                             REFERENCES tipo_documento  (tdoc_codigo)
go


ALTER TABLE Legajo_grupo
       ADD FOREIGN KEY (legr_cuenta)
                             REFERENCES Cuentas_contables  (
              ccon_cuenta)
go


ALTER TABLE Legajo_grupo
       ADD FOREIGN KEY (legr_categoria)
                             REFERENCES Categorias  (cate_codigo)
go


ALTER TABLE Legajo_grupo
       ADD FOREIGN KEY (legr_legajo)
                             REFERENCES Legajos  (lega_legajo)
go


ALTER TABLE Legajo_grupo
       ADD FOREIGN KEY (legr_grupo)
                             REFERENCES Grupos_convenios  (
              grup_codigo)
go


ALTER TABLE Liquidacion_legajo
       ADD FOREIGN KEY (lleg_grupo, lleg_legajo)
                             REFERENCES Legajo_grupo  (legr_grupo, 
              legr_legajo)
go


ALTER TABLE Liquidacion_legajo
       ADD FOREIGN KEY (lleg_cod_concepto)
                             REFERENCES Codigos_concepto  (
              codc_codigo)
go


ALTER TABLE Prestamos
       ADD FOREIGN KEY (pres_grupo, pres_legajo)
                             REFERENCES Legajo_grupo  (legr_grupo, 
              legr_legajo)
go


ALTER TABLE Recibos
       ADD FOREIGN KEY (reci_liqi_numero)
                             REFERENCES Liquidacion  (liqi_numero)
go


ALTER TABLE Recibos
       ADD FOREIGN KEY (reci_grupo, reci_legajo, reci_cod_concepto)
                             REFERENCES Liquidacion_legajo  (
              lleg_grupo, lleg_legajo, lleg_cod_concepto)
go




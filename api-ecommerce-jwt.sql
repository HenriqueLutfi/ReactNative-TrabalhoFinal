-- public.categoria definition

-- Drop table

-- DROP TABLE public.categoria;

CREATE TABLE public.categoria (
	id_categoria serial4 NOT NULL,
	nome_categoria varchar(255) NULL,
	imagem varchar(100) NULL,
	CONSTRAINT categoria_pkey PRIMARY KEY (id_categoria)
);


-- public.estoque definition

-- Drop table

-- DROP TABLE public.estoque;

CREATE TABLE public.estoque (
	id_estoque serial4 NOT NULL,
	id_produto int8 NULL,
	quantidade int8 NULL,
	CONSTRAINT estoque_pkey PRIMARY KEY (id_estoque)
);


-- public.fornecedor definition

-- Drop table

-- DROP TABLE public.fornecedor;

CREATE TABLE public.fornecedor (
	id_fornecedor serial4 NOT NULL,
	tipo varchar(255) NULL,
	razao_social varchar(255) NULL,
	cnpj varchar(14) NOT NULL,
	uf varchar(2) NULL,
	telefone varchar(100) NULL,
	email varchar(255) NULL,
	nome_fantasia varchar(255) NULL,
	status_situacao varchar(100) NULL,
	bairro varchar(255) NULL,
	logradouro varchar(255) NULL,
	numero int8 NULL,
	complemento varchar(100) NULL,
	cep varchar(10) NULL,
	municipio varchar(255) NULL,
	data_abertura timestamp NULL,
	CONSTRAINT fornecedor_pkey PRIMARY KEY (id_fornecedor)
);


-- public.perfil definition

-- Drop table

-- DROP TABLE public.perfil;

CREATE TABLE public.perfil (
	id_perfil serial4 NOT NULL,
	nome_perfil varchar(100) NULL,
	CONSTRAINT perfil_pkey PRIMARY KEY (id_perfil)
);


-- public.usuario definition

-- Drop table

-- DROP TABLE public.usuario;

CREATE TABLE public.usuario (
	id_usuario serial4 NOT NULL,
	nome_usuario varchar(100) NULL,
	email varchar(100) NULL,
	senha varchar(255) NULL,
	CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario)
);


-- public.produto definition

-- Drop table

-- DROP TABLE public.produto;

CREATE TABLE public.produto (
	id_produto serial4 NOT NULL,
	sku varchar(255) NULL,
	nome_produto varchar(255) NULL,
	id_fornecedor int8 NOT NULL,
	id_categoria int8 NOT NULL,
	imagem_produto varchar(255) NULL,
	CONSTRAINT produto_pkey PRIMARY KEY (id_produto),
	CONSTRAINT produto_id_categoria_fkey FOREIGN KEY (id_categoria) REFERENCES public.categoria(id_categoria),
	CONSTRAINT produto_id_fornecedor_fkey FOREIGN KEY (id_fornecedor) REFERENCES public.fornecedor(id_fornecedor)
);


-- public.usuario_rel_perfil definition

-- Drop table

-- DROP TABLE public.usuario_rel_perfil;

CREATE TABLE public.usuario_rel_perfil (
	id_usuario int8 NULL,
	id_perfil int8 NULL,
	CONSTRAINT usuario_rel_perfil_id_perfil_fkey FOREIGN KEY (id_perfil) REFERENCES public.perfil(id_perfil),
	CONSTRAINT usuario_rel_perfil_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario)
);


INSERT INTO "PUBLIC"."CATEGORIA" (NOME_CATEGORIA,IMAGEM) VALUES
	 ('Acessorios', 'disease'),
	 ('Canecas','mug-hot'),
	 ('Colecionaveis','space-shuttle'),
	 ('Livros','book-dead'),
	 ('Camisa','tshirt');
INSERT INTO "PUBLIC"."ESTOQUE" (ID_PRODUTO,QUANTIDADE) VALUES
	 (1,10),
	 (3,30);
INSERT INTO "PUBLIC"."FORNECEDOR" (TIPO,RAZAO_SOCIAL,CNPJ,UF,TELEFONE,EMAIL,NOME_FANTASIA,STATUS_SITUACAO,BAIRRO,LOGRADOURO,NUMERO,COMPLEMENTO,CEP,MUNICIPIO,DATA_ABERTURA) VALUES
	 ('Matriz','Primeiro Fornecedor','01111222000100','RJ','2125874125','email@mail.com','Nome Fantasia','Ativo','Centro','Rua Principal',10,'','25600000','Petrópolis','2022-05-27 09:23:36.461');
INSERT INTO "PUBLIC"."PERFIL" (NOME_PERFIL) VALUES
	 ('ROLE_USER');
INSERT INTO "PUBLIC"."PRODUTO" (SKU,NOME_PRODUTO,ID_FORNECEDOR,ID_CATEGORIA,IMAGEM_PRODUTO) VALUES
	 ('123','Sabre de Luz Vermelho',1,1,'https://i1.wp.com/nerdizmo.uai.com.br/wp-content/uploads/sites/29/2014/05/lightsaber-insides-1.jpg?ssl=1'),
	 ('122','Caneca Baby Yoda',1,2,'https://static3.tcdn.com.br/img/img_prod/460977/caneca_no_coffee_no_force_baby_yoda_star_wars_preta_ev_80713_1_cf0f695c78bacc0310c58672a7ab4a95.jpg'),
	 ('121','Boneco Baby Yoda',1,3,'https://rihappy.vtexassets.com/arquivos/ids/4019941-800-auto?v=637904105856630000&width=800&height=auto&aspect=true'),
	 ('120','Armadura Mandaloriano',1,1,'https://multiversonoticias.com.br/wp-content/uploads/2020/11/ARMADURA.jpg'),
	 ('191','Sabre de Luz Azul',1,1,'https://m.media-amazon.com/images/I/416+Z8vv7TL._SL500_.jpg'),
	 ('190','Livro Star Wars: Dark Edition',1,4,'https://images-na.ssl-images-amazon.com/images/I/71sf+k7nCQL.jpg'),
	 ('189','Camisa Darth Vader',1,9,'https://cf.shopee.com.br/file/508e78804beb37f6d52734db17a32dc5'),
	 ('188','Funko Pop General Grievous',1,3,'https://images-americanas.b2w.io/produtos/4432126344/imagens/funko-pop-star-wars-129-general-grievous-special-ed/4432126344_1_large.jpg'),
	 ('187','Capacete Darth Vader',1,1,'https://conteudo.imguol.com.br/c/entretenimento/81/2019/02/12/o-capacete-de-darth-vader-1550013937325_v2_1x1.png'),
	 ('186','Funko Pop Darth Maul',1,3,'https://cf.shopee.com.br/file/c9c9c581026379a31c8b77c0203f01fa'),
	 ('185','Caneca R2D2',1,2,'https://cdn.iset.io/assets/55268/produtos/30258/caneca-star-wars.jpg'),
	 ('184','Sabre de Luz Verde',1,1,'https://www.ubuy.com.zm/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzMxTS1xVTdzeGhMLmpwZw.jpg'),
	 ('183','LEGO Estrela da Morte',1,3,'https://images.tcdn.com.br/img/img_prod/640089/lego_75159_star_wars_estrela_da_morte_4461_1_6358695e2dab584d0b381a2dcecf2434.jpg'),
	 ('182','LEGO Millennium Falcon',1,3,'https://www.lego.com/cdn/cs/set/assets/blte22f1f8d1cacfb3c/75192_alt1.jpg'),
	 ('181','Manto Jedi',1,1,'https://ae01.alicdn.com/kf/HTB1hgB8RVXXXXXiXFXXq6xXFXXX0.jpg?size=607279&height=1000&width=1000&hash=294cb9f801a098efd73af1eaa9ed6d4e');
INSERT INTO "PUBLIC"."USUARIO" (NOME_USUARIO,EMAIL,SENHA) VALUES
	 ('usuario','usuario@mail.com','$2a$12$3COb/LHNYO/JeLWy1ExGFe6U2iyFczP70/kBUEHbf9miQ4Vp64A42');
INSERT INTO "PUBLIC"."USUARIO_REL_PERFIL" (ID_USUARIO,ID_PERFIL) VALUES
	 (1,1);

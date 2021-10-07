import React from "react";






let Filters = () => {
    return (
        <div>
            <Input name="search" placeholder="Pesquisa..." type="search" />
            <Row type="flex" justify="space-between">
                <Input
                    placeholder="Deste"
                    type="text"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => !e.target.value && (e.target.type = "text")}
                    width="50%"
                />
                <Input
                    placeholder="Até"
                    type="text"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => !e.target.value && (e.target.type = "text")}
                    width="50%"
                />
            </Row>
            <Select required name="client">
                <option disabled selected value="">
                    Cliente
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </Select>
            <Select required name="category">
                <option disabled selected value="">
                    Categoria
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </Select>
            <Select required name="item">
                <option disabled selected value="">
                    Produto
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </Select>

            <Button>Pesquisar</Button>
        </div>
    );
};

export default Filters;

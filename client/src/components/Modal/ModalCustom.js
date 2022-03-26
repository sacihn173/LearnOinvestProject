import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import classes from "./ModalCustom.module.css";
import Loading from "../UI/Loading";
import priceData from "../helperFunctions/getPriceData";
import api from "../../config/api";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const ModalCustom = (props) => {
  const [loading, setLoading] = useState(true);
  const [stockData, setStockData] = useState();
  const [quantity, setQuantity] = useState();
  const [allPrice, setAllPrice] = useState();

  useEffect(() => {
    const func = async () => {
      const data = {
        query: props.title,
      };
      const res = await priceData(data);
      setStockData(res[1]);
      setAllPrice(res[0]);
      setLoading(false);
    };
    func();
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      stock_name: props.title,
      buy_price: stockData,
      quantity: parseInt(quantity),
    };
    console.log(data);
    const response = await api.post("/buyupdate", data);
    console.log(response);
    console.log(quantity * stockData);
    if (response.data === "VALID") {
      const response = await api.get("/balance");
      dispatch({
        type: "GOT_BALANCE_DATA",
        payload: { data: response.data },
      });
    }
    props.handleClose();
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setQuantity(event.target.value);
  };
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {props.title} {props.info}
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className={classes.priceModal}>
              {loading ? (
                <Loading />
              ) : (
                <>
                  <div>Price :  <FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon> {Math.round(stockData)}</div>
                  <div>
                    Quantity{" "}
                    <input
                      onChange={handleChange}
                      type={"number"}
                      max={5}
                      min={1}
                      defaultValue={1}
                    ></input>
                  </div>
                </>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={props.handleClose}>
              close
            </Button>
            <Button type="submit" variant="success">
              Buy
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ModalCustom;

import Image from "next/image";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="John Doe" />
          <label>Price</label>
          <input type="number" name="price" placeholder="33.33" />
          <label>Stock</label>
          <input type="number" name="stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <input type="text" name="size" placeholder="size" />
          <label>Description</label>
          <textarea name="desc" id="desc" placeholder="Description" />
          <label>Is Admin?</label>
          <select name="cat" id="cat">
            <option value="general">Choose a category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;

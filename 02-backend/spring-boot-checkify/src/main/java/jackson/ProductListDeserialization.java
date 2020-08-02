package jackson;


import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.finalProject.checkify.entity.ProductList;

import java.io.IOException;

public class ProductListDeserialization extends StdDeserializer<ProductList> {

    public ProductListDeserialization() {
        this(null);
    }

       public ProductListDeserialization(Class<?> vc) {
        super(vc);
    }

    @Override
    public ProductList deserialize(JsonParser jsonParser, DeserializationContext deserializationContext)
            throws IOException {
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        String barcode =  node.get("code").asText();
        String name =  node.get("description").asText();
        String imageUrl =  node.get("image_url").asText();

        return new ProductList(barcode, name , imageUrl);
    }


}
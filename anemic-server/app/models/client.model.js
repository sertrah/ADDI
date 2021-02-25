module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      nationalId: String,
      birthDate: String,
      name: String,
      lastName: String,
      email: String,
      type: { type: String, enum: ["lead", "prospect"], required: true},
    },
    { timestamps: true }
  );

  
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Client = mongoose.model("client", schema);
  return Client;
};
module.exports = function (sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,

            // validate: {
            //     len: [1]
            // }
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,

            // validate: {
            //     len: [1]
            // }
        },
    });

    // Post.associate = function (models) {
    //     // We're saying that a Post should belong to an Author
    //     // A Post can't be created without an Author due to the foreign key constraint
    //     Post.belongsTo(models.Author, {
    //         foreignKey: {
    //             allowNull: true
    //         }
    //     });
    // };

    return Post;
};